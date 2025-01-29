from flask import Blueprint, jsonify
from models.plant_model import Plant

plant_bp = Blueprint("plants", __name__)

# Sample plant data (use database in production)
PLANTS = [
    {
        "id": 1,
        "name": "Amla",
        "scientific_name": "Emblica officinalis",
        "description": "Rich in Vitamin C.",
        "image_url": "/amla.jpg",
    },
    {
        "id": 2,
        "name": "Ashwagandha",
        "scientific_name": "Withania somnifera",
        "description": "reducing stress and anxiety.",
        "image_url": "/Ashwagandha.jpeg",
    },
    {
        "id": 3,
        "name": "Bael",
        "scientific_name": "Aegle marmelos",
        "description": "treat diarrhea",
        "image_url": "/Bael.jpg",
    },
    {
        "id": 4,
        "name": "Neem",
        "scientific_name": "Azadirachta indica",
        "description": "Antiseptic properties.",
        "image_url": "/neem.jpg",
    },
    {
        "id": 5,
        "name": "Tulsi",
        "scientific_name": "Ocimum sanctum",
        "description": "Natural immunity booster",
        "image_url": "/tulsi.jpeg",
    },
    {
        "id": 6,
        "name": "Bharangi",
        "scientific_name": "Clerodendrum serratum",
        "description": "Effective in treating respiratory disorders",
        "image_url": "/Bharangi.jpg",
    },
    {
        "id": 7,
        "name": "Bhringraj",
        "scientific_name": "Eclipta prostrata",
        "description": "Known for promoting hair growth",
        "image_url": "/Bhringraj.jpeg",
    },
    {
        "id": 8,
        "name": "Dita",
        "scientific_name": "Alstonia scholaris",
        "description": "Traditionally used to treat malaria",
        "image_url": "/Dita.png",
    },
    {
        "id": 9,
        "name": "Rakta Chitraka",
        "scientific_name": "Plumbago indica",
        "description": "Stimulates digestion",
        "image_url": "/Rakta_Chitraka.png",
    },
    {
        "id": 10,
        "name": "Sandalwood",
        "scientific_name": "Santalum album",
        "description": "Known for its cooling and anti-inflammatory properties",
        "image_url": "/Sandalwood.jpeg",
    },
    {
        "id": 11,
        "name": "Sarpagandha",
        "scientific_name": "Rauvolfia serpentina",
        "description": "Used to treat high blood pressure",
        "image_url": "/Rakta_Chitraka.png",
    },
    {
        "id": 12,
        "name": "Turmeric",
        "scientific_name": "Curcuma longa",
        "description": "Used for wound healing, boosting immunity, and reducing inflammation.",
        "image_url": "/turmeric.png",
    }
]

@plant_bp.route("/", methods=["GET"])
def get_plants():
    return jsonify(PLANTS)

@plant_bp.route("/<int:plant_id>", methods=["GET"])
def get_plant_details(plant_id):
    plant = next((plant for plant in PLANTS if plant["id"] == plant_id), None)
    if not plant:
        return jsonify({"error": "Plant not found"}), 404
    return jsonify(plant)
