import { useParams, Link } from 'react-router-dom';
import './PlantDetails.css'

const PlantDetails = () => {
  const { id } = useParams();
  
  const plants = [
    { id: '1', name: 'Amla (Indian Gooseberry)', 
      description: 'Rich in Vitamin C, boosts immunity. Improves digestion and relieves acidity. Beneficial for hair and skin health. Aids in managing diabetes by reducing blood sugar levels. Acts as a natural antioxidant. Strengthens the liver and flushes out toxins. Improves eyesight and reduces eye strain. Promotes heart health by lowering cholesterol. Balances all three doshas (Vata, Pitta, Kapha). Supports respiratory health and alleviates cough.', 
      image_url: '/amla_1.png',
      disease: 'Digestive disorders, Respiratory infections, Diabetes, Skin disorders, Hair loss and premature greying.',
      cure:'Digestive Disorders: Consume amla juice or powder mixed with warm water. Respiratory Infections: Take amla powder with honey daily.\n Skin Disorders: Apply amla paste externally or drink amla juice for internal detoxification. Hair Loss: Use amla oil for scalp massage or rinse hair with amla-infused water.'
    },
    {
      id: '2',
      name: 'Ashwagandha',
      description: "Reduces stress and anxiety by calming the nervous system. Enhances energy levels and combats fatigue. Improves memory and cognitive function. Supports muscle strength and physical performance. Regulates thyroid and adrenal gland functions. Boosts immunity and supports recovery from illness. Aids in managing arthritis and inflammation. Promotes sound sleep and treats insomnia. Balances Vata and Kapha doshas. Enhances reproductive health in both men and women.",
      image_url: '/Ashwagandha_1.png',
      disease:'Stress, anxiety, and depression. Fatigue and weakness. Insomnia. Arthritis. Low immunity',
      cure:'Stress and Anxiety: Drink ashwagandha tea or consume its powder with warm milk at night. Fatigue: Take ashwagandha capsules or powder with honey. Arthritis: Use ashwagandha root decoction for relief. Immunity Boost: Add ashwagandha powder to smoothies or soups.'
    },
    {
      id: '3',
      name: 'Bael (Wood Apple)',
      scientificName: 'Aegle marmelos',
      description: "Effective in treating diarrhea and dysentery. Enhances digestion and alleviates constipation. Improves appetite and supports gastrointestinal health. Reduces inflammation and pain in joints. Balances Pitta and Kapha doshas. Supports healthy blood sugar levels. Acts as a cardiac tonic and improves heart health. Boosts immunity and fights infections. Protects the liver and detoxifies the body. Relieves respiratory issues like asthma.",
      image_url: '/Bael_1.png',
      disease:'Diarrhea and dysentery. Constipation. Ulcerative colitis. Diabetes. Respiratory problems like asthma',
      cure: 'Diarrhea/Dysentery: Consume bael fruit pulp mixed with water and jaggery. Constipation: Take ripe bael fruit pulp with warm water. Respiratory Problems: Drink bael leaf tea regularly.',
    },
    {
      id: '4',
      name: 'Neem',
      scientificName: 'Azadirachta indica',
      description: "Treats respiratory disorders such as asthma and bronchitis. Acts as a natural immunity booster. Alleviates fever and common cold symptoms. Reduces stress and promotes mental clarity. Regulates blood sugar levels in diabetes. Fights skin infections and improves complexion. Detoxifies the body by purifying the blood. Relieves headaches and migraines. Improves digestion and treats gastric issues. Balances Kapha and Vata doshas.",
      image_url: '/Neem_1.png',
      disease:'Acne and other skin conditions. Eczema and psoriasis. Diabetes. Intestinal worms. Oral health problems (e.g., gingivitis)',
      cure:'Skin Diseases: Apply neem oil or neem leaf paste on the affected area. Diabetes: Drink neem leaf juice daily on an empty stomach. Oral Health: Chew neem twigs or use neem-based toothpaste.'
    },
    {
      id: '5',
      name: 'Tulsi',
      scientificName: 'Ocimum sanctum',
      description: "Treats respiratory disorders such as asthma and bronchitis. Acts as a natural immunity booster. Alleviates fever and common cold symptoms. Reduces stress and promotes mental clarity. Regulates blood sugar levels in diabetes. Fights skin infections and improves complexion. Detoxifies the body by purifying the blood. Relieves headaches and migraines. Improves digestion and treats gastric issues. Balances Kapha and Vata doshas..",
      image_url: '/Tulsi_1.png',
      disease:'Common cold, cough, and flu. Asthma and bronchitis. Stress and anxiety. Fever and malaria. Skin infections',
      cure:'Cold and Cough: Boil tulsi leaves in water and drink as tea with honey. Asthma: Mix tulsi juice with ginger and honey, consume twice daily. Skin Infections: Apply a paste of crushed tulsi leaves externally.'
    },
    {
      id: '6',
      name: 'Bharangi',
      scientificName: 'Clerodendrum serratum',
      description: "Treats respiratory disorders like asthma and bronchitis. Reduces inflammation in sinusitis and nasal congestion. Acts as a natural expectorant for cough relief. Improves digestive health and alleviates constipation. Detoxifies the liver and purifies blood. Balances Kapha dosha and supports immunity. Promotes healthy skin and treats eczema. Alleviates fever and associated symptoms. Enhances appetite and reduces abdominal bloating. Reduces oxidative stress with antioxidant properties.",
      image_url: '/Bharangi1.jpg',
      disease:'Asthma and bronchitis. Sinusitis. Chronic cough. Inflammation. Skin infections',
      cure:'Respiratory Disorders: Use bharangi root powder with honey to relieve asthma and bronchitis. Inflammation: Drink bharangi leaf decoction for its anti-inflammatory effects.'
    },
    {
      id: '7',
      name: 'Bhringraj',
      scientificName: 'Eclipta prostrata',
      description: "Promotes hair growth and prevents hair loss. Treats scalp issues like dandruff and dryness. Improves liver function and detoxification. Enhances memory and reduces stress. Alleviates respiratory disorders like asthma. Strengthens bones and reduces joint pain. Improves skin health and treats infections. Balances Vata and Kapha doshas. Acts as a natural rejuvenator for overall health. Aids in treating anemia and boosting energy levels.",
      image_url: '/Bhringraj1.png',
      disease:'Hair loss and dandruff. Liver disorders (e.g., jaundice). Skin infections. Insomnia. Premature ageing',
      cure:'Hair Loss: Apply bhringraj oil to the scalp regularly. Liver Disorders: Take bhringraj juice or powder with warm water. Skin Infections: Use bhringraj leaf paste externally on wounds.'
    },
    {
      id: '8',
      name: 'Dita',
      scientificName: 'Alstonia scholaris',
      description: "Alleviates fever and malaria symptoms. Regulates blood pressure and improves heart health. Treats skin disorders like eczema. Reduces inflammation in joints and muscles. Acts as an antimicrobial and fights infections. Improves liver function and aids detoxification. Enhances digestion and relieves abdominal pain. Promotes healthy immune responses. Balances Kapha and Pitta doshas. Supports wound healing and tissue repair.",
      image_url: '/Dita.png',
      disease:'Malaria and fever. Respiratory infections. Digestive issues like diarrhea. Skin diseases.  yvWounds and ulcers',
      cure:'Malaria: Consume dita bark decoction to reduce fever. Respiratory Infections: Use dita leaf extract as a natural remedy. Digestive Issues: Take dita bark powder with warm water.'
    },
    {
      id: '9',
      name: 'Rakta Chitraka',
      scientificName: 'Plumbago indica',
      description: "Stimulates appetite and treats indigestion. Improves metabolism and reduces obesity. Treats skin diseases like vitiligo. Reduces inflammation in arthritis and joint pain. Enhances blood circulation and heart health. Alleviates respiratory issues like asthma. Purifies blood and detoxifies the body. Supports liver health and alleviates jaundice. Balances Kapha and Vata doshas. Treats fever and associated symptoms.",
      image_url: '/Rakta1.jpg',
      disease:'Digestive disorders (e.g., indigestion, flatulence). Rheumatoid arthritis. Skin disorders. Weight management. Amenorrhea',
      cure:'Digestive Disorders: Mix rakta chitraka powder with buttermilk and consume after meals. Arthritis: Apply rakta chitraka paste on affected joints for relief. Skin Issues: Use rakta chitraka decoction as a wash for skin infections.' 
    },
    {
      id: '10',
      name: 'Sandalwood',
      scientificName: 'Plumbago indica',
      description: "Soothes skin inflammation and treats acne. Calms the mind and reduces stress. Treats urinary tract infections and burning sensations. Acts as a natural coolant for the body. Reduces fever and associated symptoms. Balances Pitta dosha with its cooling properties. Improves complexion and reduces dark spots. Alleviates headaches and promotes relaxation. Treats mild respiratory issues like cough. Enhances overall skin health.",
      image_url: '/Sandalwood1.png',
      disease: 'Skin diseases (e.g., acne, eczema). Inflammation and burns. Headaches and stress. Urinary tract infections. Fever',
      cure:'Skin Diseases: Apply sandalwood paste (made with water or rose water) on the affected area. Urinary Tract Infections: Drink sandalwood-infused water or milk. Headaches and Stress: Apply sandalwood paste on the forehead.'
    },
    {
      id: '11',
      name: 'Sarpagandha',
      scientificName: 'Plumbago indica',
      description: "Reduces high blood pressure effectively. Calms the mind and treats insomnia. Acts as a natural sedative for anxiety. Treats mental disorders like schizophrenia. Balances Vata and Pitta doshas. Alleviates fever and associated symptoms. Relieves digestive issues like abdominal cramps. Promotes heart health by reducing palpitations. Treats skin conditions like itching and redness. Enhances overall mental and physical relaxation.",
      image_url: '/Sarpagandha1.webp',
      disease: 'Hypertension. Insomnia. Anxiety disorders. Epilepsy. Psychosis',
      cure: 'Hypertension: Take sarpagandha root powder with water or honey. Insomnia: Use sarpagandha decoction before bed. Anxiety: Consume sarpagandha tablets or powder as prescribed by an Ayurvedic practitioner.'
    },
    {
      id: '12',
      name: 'Turmeric',
      scientificName: 'Plumbago indica',
      description: "Acts as a natural anti-inflammatory agent. Improves skin health and treats acne. Boosts immunity and fights infections. Enhances liver function and detoxifies the body. Regulates blood sugar levels in diabetes.Promotes wound healing and tissue repair. Alleviates arthritis pain and joint inflammation. Supports digestion and alleviates bloating. Reduces oxidative stress with antioxidant properties.Balances all three doshas effectively.",
      image_url: '/turmeric1.png',
      disease:'Inflammatory conditions (e.g., arthritis). Skin disorders (e.g., wounds, acne). Digestive issues. Respiratory problems. Diabetes and liver disorders',
      cure: 'Inflammatory Conditions: Mix turmeric powder with warm milk and drink. Skin Disorders: Apply a paste of turmeric and water or coconut oil. Respiratory Problems: Inhale steam infused with turmeric water or drink turmeric tea. Wounds: Sprinkle turmeric powder on wounds for faster healing.'
    },
  ];

  const plant = plants.find((p) => p.id === id);

  if (!plant) {
    return <h2>Plant not found</h2>;
  }

  return (
    <div className='box-1'>
      
      <img src={plant.image_url} alt={plant.name} className='image-main'/>
      <div className='wrap'>
        <h1 className='name'>{plant.name}</h1>
        <h3 className='description1'>Description:</h3>
        <h3 className='description'>{plant.description}</h3>
        <h3 className="disease1">Diseases it cures:</h3>
        <h4 className='disease'>{plant.disease}</h4>
        <h4 className="cure1">Cure:</h4>
        <h4 className='cure'>{plant.cure}</h4>
      </div>
    </div>
  );
};

export default PlantDetails;
