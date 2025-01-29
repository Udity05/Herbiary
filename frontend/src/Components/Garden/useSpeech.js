
import { useState, useEffect } from 'react';

const useSpeech = (text) => {
    const [speechStatus, setSpeechStatus] = useState('idle');
    const [utterance, setUtterance] = useState(null);

    useEffect(() => {
        const synth = window.speechSynthesis;
        const u = new SpeechSynthesisUtterance(text);
        setUtterance(u);

        u.onstart = () => setSpeechStatus('speaking');
        u.onend = () => setSpeechStatus('idle');
        u.onerror = () => setSpeechStatus('error');

        return () => {
            synth.cancel();
        };
    }, [text]);

    const start = () => {
        if (utterance) {
            window.speechSynthesis.speak(utterance);
        }
    };

    const stop = () => {
        window.speechSynthesis.cancel();
    };

    return { speechStatus, start, stop };
};

export default useSpeech;