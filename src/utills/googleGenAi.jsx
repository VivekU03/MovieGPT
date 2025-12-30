import { GoogleGenAI } from '@google/genai';
import { GOOGLEGENAI_KEY } from './constants';

const ai = new GoogleGenAI({
    apiKey: GOOGLEGENAI_KEY,
});

export default ai;