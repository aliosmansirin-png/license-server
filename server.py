from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/check", methods=["POST"])
def check():
    return jsonify({"allow": True})

@app.route("/")
def home():
    return "OK"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000)
