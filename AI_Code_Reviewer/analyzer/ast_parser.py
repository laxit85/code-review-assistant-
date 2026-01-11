import ast

class ASTAnalyzer(ast.NodeVisitor):
    def __init__(self):
        self.loops = 0
        self.functions = 0
        self.nested_depth = 0
        self.current_depth = 0
        self.recursive_calls = 0
        self.function_names = set()

    def visit_FunctionDef(self, node):
        self.functions += 1
        self.function_names.add(node.name)
        self.generic_visit(node)

    def visit_For(self, node):
        self.loops += 1
        self.current_depth += 1
        self.nested_depth = max(self.nested_depth, self.current_depth)
        self.generic_visit(node)
        self.current_depth -= 1

    def visit_While(self, node):
        self.loops += 1
        self.generic_visit(node)

    def visit_Call(self, node):
        if isinstance(node.func, ast.Name) and node.func.id in self.function_names:
            self.recursive_calls += 1
        self.generic_visit(node)

def analyze_ast(code):
    tree = ast.parse(code)
    analyzer = ASTAnalyzer()
    analyzer.visit(tree)
    return {
        "loops": analyzer.loops,
        "functions": analyzer.functions,
        "nested_depth": analyzer.nested_depth,
        "recursive_calls": analyzer.recursive_calls
    }
