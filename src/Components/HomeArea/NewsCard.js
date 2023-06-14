import { useState } from "react";
import React from "react";

function NewsCard(props) {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({
    title: "",
    date: "",
    content: "",
  });

  const handlePopupOpen = (title, date, content) => {
    setPopupContent({ title, date, content });
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };
  return (
    <div className="news-content">
      <div className="news-header-date">
        <h3 className="news-header">{props.title}</h3>
        <div className="news-date">{props.date}</div>
      </div>

      <div className="news-paragraph">
        <p>{props.content}</p>
        <button
          className="popup-button"
          onClick={() =>
            handlePopupOpen(props.title, props.date, props.longContent)
          }
        >
          Read More
        </button>
      </div>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <div className="popup-header">
              <div className="popup-header-information">
                <h3 className="popup-title">{popupContent.title}</h3>
                <div className="popup-date">{popupContent.date}</div>
              </div>
              <button className="popup-close-button" onClick={handlePopupClose}>
                <span className="closeBar"></span>
                <span className="closeBar"></span>
                <span className="closeBar"></span>
              </button>
            </div>
            <div className="popup-paragraph">
              <p>{popupContent.content}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewsCard;
