import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Grid} from '@mui/material';
import useSpeech from './useSpeech';
import './Garden.css'; 

const Garden = () => {

  useEffect(() => {
      const welcomeMessage =
        "Welcome to the Virtual Garden of Ayurvedic Plants. Discover the magic !";
  
      const speak = (text) => {
        if ('speechSynthesis' in window) {
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.rate = 1; // Adjust the speed of speech
          utterance.pitch = 0.5; // Adjust the pitch of speech
          utterance.volume = 1; // Volume of speech
          utterance.lang = 'en-US'; // Language
  
          utterance.onstart = () => console.log('Speech started');
          utterance.onend = () => console.log('Speech ended');
          utterance.onerror = (e) => console.error('Speech synthesis error:', e);
  
          // Use setTimeout to ensure speech starts after any rendering delays
          setTimeout(() => {
            window.speechSynthesis.speak(utterance);
          }, 50);
        } else {
          console.error('Text-to-speech is not supported in this browser.');
        }
      };
  
      // Trigger the speech
      speak(welcomeMessage);
  
      // Cleanup speech synthesis on unmount
      return () => {
        window.speechSynthesis.cancel();
      };
    }, []);
  
 
  const plants = [
    {
      id: 1,
      name: 'Amla',
      scientificName: 'Emblica officinalis',
      description: "Amla is Rich in Vitamin C, it boosts immunity, improves digestion, and promotes hair growth. It also has antioxidant and anti-inflammatory properties.",
      image_url: 'amla.jpg' 
    },
    {
      id: 2,
      name: 'Ashwagandha',
      scientificName: 'Withania somnifera',
      description: "Known for reducing stress and anxiety, it enhances energy, boosts immunity, and improves overall vitality.",
      image_url: 'Ashwagandha.jpeg'
    },
    {
      id: 3,
      name: 'Bael',
      scientificName: 'Aegle marmelos',
      description: "Its fruit pulp is used to treat diarrhea, dysentery, and constipation. It also supports gut health.",
      image_url: 'Bael.png'
    },
    {
      id: 4,
      name: 'Neem',
      scientificName: 'Azadirachta indica',
      description: "Widely used for its antiseptic, antifungal, and anti-inflammatory properties. It benefits skin health and helps manage diabetes.",
      image_url: 'Neem.jpeg'
    },
    {
      id: 5,
      name: 'Tulsi',
      scientificName: 'Ocimum sanctum',
      description: "A natural immunity booster, Tulsi is effective in respiratory disorders, reducing stress, and has antibacterial properties.",
      image_url: 'tulsi.jpeg'
    },
    {
      id: 6,
      name: 'Bharangi',
      scientificName: 'Clerodendrum serratum',
      description: "Effective in treating respiratory disorders like asthma and bronchitis. It also has anti-inflammatory and antimicrobial properties.",
      image_url: 'Bharangi.jpg' 
    },
    {
      id: 7,
      name: 'Bhringraj',
      scientificName: 'Eclipta prostrata',
      description: "Known for promoting hair growth, it helps treat hair loss, liver disorders, and skin ailments.",
      image_url: 'Bhringraj.jpeg' 
    },
    {
      id: 8,
      name: 'Dita',
      scientificName: 'Alstonia scholaris',
      description: "Traditionally used to treat malaria, respiratory infections, and digestive issues.",
      image_url: 'Dita.png' 
    },
    {
      id: 9,
      name: 'Rakta Chitraka',
      scientificName: 'Plumbago indica',
      description: "Stimulates digestion, enhances appetite, and is used in treating skin disorders and joint pain.",
      image_url: 'Rakta_Chitraka.png' 
    },
    {
      id: 10,
      name: 'Sandalwood',
      scientificName: 'Santalum album',
      description: "Known for its cooling and anti-inflammatory properties, it is used in skin care, treating acne, and reducing anxiety.",
      image_url: 'Sandalwood.jpeg' 
    },
    {
      id: 11,
      name: 'Sarpagandha',
      scientificName: 'Rauvolfia serpentina',
      description: "Used to treat high blood pressure, insomnia, and anxiety disorders.",
      image_url: 'Sarpagandha.jpg' 
    },
    {
      id: 12,
      name: 'Turmeric',
      scientificName: 'Curcuma longa',
      description: "Rich in curcumin, it has powerful anti-inflammatory and antioxidant properties. Used for wound healing, boosting immunity, and reducing inflammation.",
      image_url: 'turmeric.png' 
    },
    
  ];

  

  return (
    <Container className='garden'>
    
    
      <Typography variant="h4" gutterBottom className='head' style={{fontSize: '60px', fontWeight: '600', fontFamily: "Parkinsans"}} >
        Welcome to the Virtual Garden of Herbiary!
      </Typography>
      <Grid container spacing={10} className='container'>
        {plants.map(plant => {
          const speech = useSpeech(plant.description); 
          return (
            <Grid item xs={12} sm={6} md={4} key={plant.id}className='grid'>
              <div className='card'>
                <div className="card-content">
                  <div className="card-front">
                <img src={plant.image_url} alt={plant.name} style={{ width: '100%' }} className='plant-image' />
                <Typography variant="h4" className='name' style={{fontSize: '1.5rem', fontWeight: '600', fontFamily: "Parkinsans"}}>{plant.name}</Typography>
                <div className="speech-buttons">
                  <button onClick={speech.start} onDoubleClick={speech.stop}>
                    <img src="voice.png" alt="Speak" className='voice-image'/>
                  </button>
                  </div>
                <Typography variant='h6' className='plant-scientific-name' style={{fontSize:'0.9rem'}}><i>{plant.scientificName}</i></Typography>
                </div>
                
                 <Typography variant="h5" className='plant-description' style={{fontSize: '0.85rem'}}>{plant.description}</Typography>
                 <div className="card-back">
                 <Link to={`/plant/${plant.id}`}>
                   <Typography variant='h5' style={{fontSize: '1rem', fontWeight:'550'}} className='link'>Details</Typography>
                  </Link>
                  </div>
                  </div>

              </div>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Garden;