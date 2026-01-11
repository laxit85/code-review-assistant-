from flask import Flask, request, jsonify
from flask_cors import CORS
from analyzer.ast_parser import analyze_ast
from analyzer.static_analysis import static_analysis
from analyzer.complexity_analyzer import analyze_complexity
from analyzer.optimization_engine import suggest_optimizations
from ml_model.feature_extractor import extract_features
from joblib import load

app = Flask(__name__)
CORS(app)

# Load ML model
model = load("ml_model/quality_model.pkl")

@app.route('/analyze', methods=['POST'])
def analyze_code():
    try:
        data = request.get_json()
        code = data.get('code', '')

        if not code:
            return jsonify({'error': 'No code provided'}), 400

        # AST analysis
        ast_data = analyze_ast(code)

        # Static analysis
        issues = static_analysis(code)

        # Complexity
        complexity = analyze_complexity(ast_data)

        # Optimizations
        suggestions = suggest_optimizations(code)

        # ML scoring
        features = extract_features(ast_data, issues)
        score = int(model.predict([features])[0])

        # Prepare response
        result = {
            'score': score,
            'complexity': complexity,
            'issues': issues,
            'suggestions': suggestions
        }

        return jsonify(result)

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
