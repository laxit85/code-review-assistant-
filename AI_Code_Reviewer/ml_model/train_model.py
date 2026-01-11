import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from joblib import dump

# Dummy dataset
data = pd.DataFrame({
    "loops": [0,1,2,3],
    "depth": [0,1,2,3],
    "functions": [1,2,3,4],
    "recursion": [0,0,1,1],
    "issues": [0,1,3,5],
    "score": [90,75,50,30]
})

X = data.drop("score", axis=1)
y = data["score"]

model = RandomForestRegressor()
model.fit(X, y)

dump(model, "quality_model.pkl")
print("Model trained & saved")
