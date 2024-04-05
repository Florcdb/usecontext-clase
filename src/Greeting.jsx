import { useLanguage } from "./LanguageContext";

const Greeting = () =>{
    const {language} = useLanguage()

    const greetings = {
        en: 'hello',
        es:'hola', 
    }
    return(<>
      <h2>{greetings[language]}</h2>
    
    </>)
}

export default Greeting