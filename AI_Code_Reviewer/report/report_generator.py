def generate_report(score, complexity, issues, suggestions):
    print("\n====== CODE REVIEW REPORT ======")
    print(f"Code Quality Score: {score}/100")
    print(f"Estimated Time Complexity: {complexity}\n")

    print("Issues Found:")
    for i in issues:
        print(f"- Line {i['line']}: {i['issue']} ({i['severity']})")

    print("\nOptimization Suggestions:")
    for s in suggestions:
        print(f"- {s['issue']} → {s['suggestion']}")
