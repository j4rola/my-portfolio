const HamburgerIcon = () => (
    <button className="hamburger-icon">
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
      <style jsx>{`
        .hamburger-icon {
          background-color: transparent;
          border: none;  
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0;
          margin: 0;
        }
        .hamburger-line {
          display: block;
          width: 24px;
          height: 2px;
          background-color: white;
          margin: 4px;
        }
      `}</style>
    </button>
  );
  
  export default HamburgerIcon;