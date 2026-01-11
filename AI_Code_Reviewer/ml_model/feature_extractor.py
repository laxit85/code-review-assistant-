def extract_features(ast_data, issues):
    return [
        ast_data["loops"],
        ast_data["nested_depth"],
        ast_data["functions"],
        ast_data["recursive_calls"],
        len(issues)
    ]
