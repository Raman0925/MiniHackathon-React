import demo from "../../assets/demo.png";
import search from "../../assets/search.png";
import configurations from "../../assets/configurations.png";
import "./consentmanager.css";

const ConsentManager = () => {
  return (
    <>
      <div className="consent-container">
        <div className="heading">Consent Manager</div>
       
          <div className="list-container">
          
            <div className="list-item">
            <button className="button-container">
              <img src={demo} alt="" />
              <span>Demo</span>
            </button>
            </div>
            
            
            <div className="list-item">
                <button className="button-container">
                <img src={configurations} alt="" />
                <span>Configurations</span>
                </button>
             
            </div>
            <div className="list-item">
                <button className="button-container">
                <img src={search} alt="" />
                <span>Search</span>
                </button>
          
            </div>
          
        </div>
      </div>
    </>
  );
};
export default ConsentManager;
