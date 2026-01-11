# AI-Based Automated Code Reviewer

This project is an AI-powered code reviewer that analyzes Python code for quality, complexity, and optimization suggestions using static analysis and machine learning.

## Features

- AST-based code analysis
- Static code analysis for common issues
- Time complexity estimation
- Optimization suggestions
- ML-based quality scoring

## Installation

1. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

2. Train the ML model:
   ```
   python ml_model/train_model.py
   ```

3. Run the code reviewer:
   ```
   python main.py
   ```

## Project Structure

- `input_code/`: Directory for code files to review
- `analyzer/`: Core analysis modules
- `ml_model/`: Machine learning components
- `report/`: Report generation
