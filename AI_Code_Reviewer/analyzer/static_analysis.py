import ast

def static_analysis(code):
    issues = []
    tree = ast.parse(code)

    for node in ast.walk(tree):
        if isinstance(node, ast.FunctionDef):
            if len(node.body) > 20:
                issues.append({
                    "line": node.lineno,
                    "issue": "Long function",
                    "severity": "Medium",
                    "suggestion": "Break function into smaller parts"
                })

        if isinstance(node, ast.ExceptHandler):
            if node.type is None:
                issues.append({
                    "line": node.lineno,
                    "issue": "Bare except detected",
                    "severity": "High",
                    "suggestion": "Catch specific exceptions"
                })

    return issues
