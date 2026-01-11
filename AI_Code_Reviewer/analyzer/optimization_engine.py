def suggest_optimizations(code):
    suggestions = []

    if "range(len(" in code:
        suggestions.append({
            "issue": "Use of range(len())",
            "suggestion": "Use enumerate() instead"
        })

    if "append" in code:
        suggestions.append({
            "issue": "Loop with append",
            "suggestion": "Use list comprehension"
        })

    return suggestions
