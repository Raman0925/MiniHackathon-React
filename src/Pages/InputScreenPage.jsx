import ConsentManager from "../Components/ConsentManager/ConsentManager"
import InputScreen from "../Components/InputScreen/InputScreen";
import Navbar from "../Components/Navbar/Navbar"

import './inputscreen.css';
const InputScreenPage = ()=>{

    return<>
    <div className="container">
    <Navbar/>
    <ConsentManager/>
    <InputScreen/>
    </div>
    </>
   
}
export default InputScreenPage;