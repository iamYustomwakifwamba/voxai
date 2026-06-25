import re


def clean_initial_prompt(prompt_text:str) -> str:

    if not prompt_text:
        return ""
    
    prompt_text = prompt_text.lower()

    noise_samples = [
        "habari", "habar", "hi", "h", "hbr", "hello",
        "hell", "boss", "naomba", "please", "samahani",
        "ningependa", "nitengenezee", "nifanyie", "unisaidie", "nisaidie"
    ]

    for word in noise_samples:
        prompt_text = prompt_text.replace(word, "")

    prompt_text = re.sub(r'\s+', ' ', prompt_text).strip()

    return prompt_text

def intent_detection(prompt_text:str) -> str:

    jingle_intent = [
        "hadithi", "jingle", "music"
    ]

    marketing_intent = [
        "advertisement", "ad", "ads",
        "market", "marketing"
    ]

    if any(word in prompt_text for word in jingle_intent):
        return "generate_jingle"
    
    if any(word in prompt_text for word in marketing_intent):
        return "marketing_content"
    
    return "general_chat"

def extract_keyword(prompt_text:str) -> list:

    words = prompt_text.split()

    stopwords = [
        "na", "wa", "la", "and", "an", "for",
        "kwa", "then", "in", "i", "to", "cha"
    ]

    keywords = [w for w in words if w not in stopwords]

    return keywords[:10]

def build_context(clean_text: str, intent: str, keywords: list) -> dict:

    ENGLISH_KEYWORDS = [

        "en",
        "english",
        "englis",
        "kingereza",
        "kiingereza",
        "kiingeleza"
    ]

    BUSINESS_TYPE_KEYWORDS = [

        'saluni', 'saloon', 'salun', 'salon',
        'bar', 'grocery', 'closary', 'glosali',
        'glosari', 'grosali', 'grosari'
    ]

    return {

        "clean_text":clean_text,
        "intent":intent,
        "keywords":keywords,
        "language":"english" if any(word in keywords for word in ENGLISH_KEYWORDS) else "kiswahili"
        
    }

def generate_title(text: str) -> str:
    text = text.strip().lower()

    
    noise = ["naomba", "please", "nisaidie", "help", "nitengenezee"]

    for word in noise:
        text = text.replace(word, "")

    words = text.split()

    title = " ".join(words[:4])  

    return title.capitalize()

def build_final_prompt(context:dict) -> str:

    if context["intent"] == "generate_jingle":
        return f"""
            Create a professional marketing jingle.

            Topic: {context['clean_text']}
            Keywords: {', '.join(context['keywords'])}
            Style: Amapiano / Afrobeat
            Tone: Energetic, catchy, commercial
            Language: {context['language']}

"""
    
    else:
        return f"""
            Respond clearly and helpfully.
            User input: {context['clean_text']}
"""
    
def process_prompt(text:str):

    clean = clean_initial_prompt(text)
    intent = intent_detection(clean)
    keywords = extract_keyword(clean)
    tile = generate_title(clean)
    context = build_context(clean, intent, keywords)
    final_prompt = build_final_prompt(context)

    return{
        "clean":clean,
        "title":tile,
        "intent":intent,
        "keywords":keywords,
        "context":context,
        "final_prompt":final_prompt
    }