def analyze_complexity(ast_data):
    depth = ast_data["nested_depth"]
    recursion = ast_data["recursive_calls"]

    if recursion > 0:
        return "O(2^n) (Recursive)"
    if depth == 0:
        return "O(1)"
    if depth == 1:
        return "O(n)"
    if depth == 2:
        return "O(n^2)"
    return "O(n^k)"
