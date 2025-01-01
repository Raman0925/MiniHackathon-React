import "./nav.css";
const NavItems = ({src,alt,label}) => {
    return (<>
              <div className="nav-items">
                <img src={src} alt={alt} />
                <span>{label}</span>
              </div>
    </>)
}