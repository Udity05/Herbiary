from flask import Flask
from flask_cors import CORS
from routes.auth_routes import auth_bp
from routes.plant_routes import plant_bp
from config import Config
import sys
import os



app = Flask(__name__)
app.config.from_object(Config)

# Enable CORS for React frontend
CORS(app)

# Register Blueprints
app.register_blueprint(auth_bp, url_prefix="/api/auth")
app.register_blueprint(plant_bp, url_prefix="/api/plants")

if __name__ == "__main__":
    app.run(debug=True)
