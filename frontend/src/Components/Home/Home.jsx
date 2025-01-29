import './Home.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    const welcomeMessage =
      "Welcome to Herbiary! Your virtual haven for exploring the wonders of medicinal plants. Discover detailed information about nature's healing treasures and begin your herbal adventure today!";

    const speak = (text) => {
      if ('speechSynthesis' in window) {

        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1; // Adjust the speed of speech
        utterance.pitch = 1; // Adjust the pitch of speech
        utterance.volume = 1; // Volume of speech
        utterance.lang = 'en-US'; // Language

        utterance.onstart = () => console.log('Speech started');
        utterance.onend = () => console.log('Speech ended');
        utterance.onerror = (e) => console.error('Speech synthesis error:', e);

        window.speechSynthesis.speak(utterance);

        // Use setTimeout to ensure speech starts after any rendering delays
        setTimeout(() => {
          window.speechSynthesis.speak(utterance);
        }, 100);
      } else {
        console.error('Text-to-speech is not supported in this browser.');
      }
    };

    // Trigger the speech
    speak(welcomeMessage);

    // Cleanup speech synthesis on unmount
    return () => {
      console.log('Cleaning up speech synthesis');
      window.speechSynthesis.cancel(); 
    };
  }, []);

  return (
    <div className="home">
      <img src="background.png" alt="" className="image" />
      <img src="background-1.png" alt="" className="bottom-img" />
      <div className="content">
        <h1 className="text-1">Welcome to Herbiary!</h1>
        <p>
          Welcome to <b>Herbiary</b>, your virtual haven for exploring the wonders of medicinal plants! Discover a diverse
          collection of nature's healing treasures, complete with detailed information on their benefits and uses. Whether
          you're a herbal enthusiast, a wellness seeker, or simply curious, this garden offers a unique journey into holistic
          health. Navigate through vibrant visuals and easy-to-understand guides to unlock the power of ancient remedies. Begin
          your herbal adventure today and let nature inspire your wellness!
        </p>
        <button className="btn1">
          <Link to="/garden">Let's Go</Link>
        </button>
        <link rel="speculationrules" href="garden.jsx"
           content='{
                     "prerender" : [{"source" : "list", "urls": ["garden.jsx"]}],
                     "prefetch" :[{"source" : "list", "urls": ["garden.css"]}]
                     }' />
      </div>
    </div>
  );
};

export default Home;
