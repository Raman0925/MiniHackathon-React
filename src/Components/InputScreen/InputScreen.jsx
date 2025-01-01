import { useSearchParams } from "react-router-dom";
import "./input-screen.css";
import React from "react";
import axios from 'axios'
const InputScreen = () => {
  const [consentData, setConsentData] = React.useState({
    customerId: "",
    RedirectURI: "",
    PolicyVersion: "",
    Purpose: "",
    Scope: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConsentData((prevState) => ({ ...consentData, [name]: value }));
  };

  const isDisabled = !(consentData.customerId && consentData.RedirectURI && consentData.PolicyVersion && consentData.PolicyVersion && consentData.Purpose && consentData.Scope);

  const handleSubmit = (e) => {
        axios.post
  };
  return (
    <>
      <div className="inputScreenContainer">
        <div className="innerframe2">
          <div className="keyheading">Enter Consent Details</div>
          <div className="card">
            <div className="card-wrapper">
              <form className="input-form" onSubmit={handleSubmit}>
                <div className="input-boxes">
                  <div className="input-label">
                    <label htmlFor="customerId">Customer ID</label>

                    <input
                      type="text"
                      id="customerId"
                      name="customerId"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-label">
                    <label htmlFor="RedirectURI">Redirect URI</label>
                    <input
                      type="text"
                      id="RedirectURI"
                      name="RedirectURI"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-label">
                    <label htmlFor="PolicyVersion">Policy Version</label>
                    <input
                      type="text"
                      id="PolicyVersion"
                      name="PolicyVersion"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-label">
                    <label htmlFor="Purpose">Purpose</label>
                    <input
                      type="text"
                      id="Purpose"
                      name="Purpose"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-label">
                    <label htmlFor="Scope">Scope</label>
                    <input
                      type="text"
                      id="Scope"
                      name="Scope"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="request-buttonWrapper">
                  <button className={isDisabled? 'disable':"enable"} disabled={isDisabled}>
                    Request Consent
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default InputScreen;
