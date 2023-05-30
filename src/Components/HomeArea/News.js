import { useState } from "react";
import React from "react";
import "./News.css";

function News() {
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
    <div className="news">
      <div className="news-container">
        <div className="news-title">
          <h2>FKA Games News</h2>
        </div>
        <div className="news-content">
          <div className="news-header-date">
            <h3 className="news-header">News Title</h3>
            <div className="news-date">16 May,2023</div>
          </div>

          <div className="news-paragraph">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              asodpfk adfa lmkal apodkfasp malşsdfmaş asdfmşasldmfş adsfa
            </p>
            <button
              className="popup-button"
              onClick={() =>
                handlePopupOpen(
                  "News Title",
                  "16 May, 2023",
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. asdf as fasd fasdf asdf asd fsadf asdf asdf sadf asdf asdf asdf ıasjdf oıasdj foaısdjf oıasdjf aoısdj foasıdj foısdj fsıodfj asopdj faspodıjfsadjfsldkşfjaslkdjf klasdj flksadj fşlajdf laşsdjfşlaksdjfşlk sajşlsadjf şlkasdj flkajsdşlf jasdşlfkjasşlfjaşslk djfşlasj şlkasj dflşksdj flşksadjf lşaksdjf şlaskdjf Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. asdf as fasd fasdf asdf asd fsadf asdf asdf sadf asdf asdf asdf ıasjdf oıasdj foaısdjf oıasdjf aoısdj foasıdj foısdj fsıodfj asopdj faspodıjfsadjfsldkşfjaslkdjf klasdj flksadj fşlajdf laşsdjfşlaksdjfşlk sajşlsadjf şlkasdj flkajsdşlf jasdşlfkjasşlfjaşslk djfşlasj şlkasj dflşksdj flşksadjf lşaksdjf şlaskdjf Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. asdf as fasd fasdf asdf asd fsadf asdf asdf sadf asdf asdf asdf ıasjdf oıasdj foaısdjf oıasdjf aoısdj foasıdj foısdj fsıodfj asopdj faspodıjfsadjfsldkşfjaslkdjf klasdj flksadj fşlajdf laşsdjfşlaksdjfşlk sajşlsadjf şlkasdj flkajsdşlf jasdşlfkjasşlfjaşslk djfşlasj şlkasj dflşksdj flşksadjf lşaksdjf şlaskdjf Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. asdf as fasd fasdf asdf asd fsadf asdf asdf sadf asdf asdf asdf ıasjdf oıasdj foaısdjf oıasdjf aoısdj foasıdj foısdj fsıodfj asopdj faspodıjfsadjfsldkşfjaslkdjf klasdj flksadj fşlajdf laşsdjfşlaksdjfşlk sajşlsadjf şlkasdj flkajsdşlf jasdşlfkjasşlfjaşslk djfşlasj şlkasj dflşksdj flşksadjf lşaksdjf şlaskdjf Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. asdf as fasd fasdf asdf asd fsadf asdf asdf sadf asdf asdf asdf ıasjdf oıasdj foaısdjf oıasdjf aoısdj foasıdj foısdj fsıodfj asopdj faspodıjfsadjfsldkşfjaslkdjf klasdj flksadj fşlajdf laşsdjfşlaksdjfşlk sajşlsadjf şlkasdj flkajsdşlf jasdşlfkjasşlfjaşslk djfşlasj şlkasj dflşksdj flşksadjf lşaksdjf şlaskdjf"
                )
              }
            >
              Read More
            </button>
          </div>
        </div>
        <div className="line"/>
        <div className="news-content">
          <div className="news-header-date">
            <h3 className="news-header">News Title</h3>
            <div className="news-date">16 May,2023</div>
          </div>

          <div className="news-paragraph">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              asodpfk adfa lmkal apodkfasp malşsdfmaş asdfmşasldmfş adsfa
            </p>
            <button
              className="popup-button"
              onClick={() =>
                handlePopupOpen(
                  "News Title",
                  "16 May, 2023",
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. asdf as fasd fasdf asdf asd fsadf asdf asdf sadf asdf asdf asdf ıasjdf oıasdj foaısdjf oıasdjf aoısdj foasıdj foısdj fsıodfj asopdj faspodıjfsadjfsldkşfjaslkdjf klasdj flksadj fşlajdf laşsdjfşlaksdjfşlk sajşlsadjf şlkasdj flkajsdşlf jasdşlfkjasşlfjaşslk djfşlasj şlkasj dflşksdj flşksadjf lşaksdjf şlaskdjf Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. asdf as fasd fasdf asdf asd fsadf asdf asdf sadf asdf asdf asdf ıasjdf oıasdj foaısdjf oıasdjf aoısdj foasıdj foısdj fsıodfj asopdj faspodıjfsadjfsldkşfjaslkdjf klasdj flksadj fşlajdf laşsdjfşlaksdjfşlk sajşlsadjf şlkasdj flkajsdşlf jasdşlfkjasşlfjaşslk djfşlasj şlkasj dflşksdj flşksadjf lşaksdjf şlaskdjf Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. asdf as fasd fasdf asdf asd fsadf asdf asdf sadf asdf asdf asdf ıasjdf oıasdj foaısdjf oıasdjf aoısdj foasıdj foısdj fsıodfj asopdj faspodıjfsadjfsldkşfjaslkdjf klasdj flksadj fşlajdf laşsdjfşlaksdjfşlk sajşlsadjf şlkasdj flkajsdşlf jasdşlfkjasşlfjaşslk djfşlasj şlkasj dflşksdj flşksadjf lşaksdjf şlaskdjf Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. asdf as fasd fasdf asdf asd fsadf asdf asdf sadf asdf asdf asdf ıasjdf oıasdj foaısdjf oıasdjf aoısdj foasıdj foısdj fsıodfj asopdj faspodıjfsadjfsldkşfjaslkdjf klasdj flksadj fşlajdf laşsdjfşlaksdjfşlk sajşlsadjf şlkasdj flkajsdşlf jasdşlfkjasşlfjaşslk djfşlasj şlkasj dflşksdj flşksadjf lşaksdjf şlaskdjf Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. asdf as fasd fasdf asdf asd fsadf asdf asdf sadf asdf asdf asdf ıasjdf oıasdj foaısdjf oıasdjf aoısdj foasıdj foısdj fsıodfj asopdj faspodıjfsadjfsldkşfjaslkdjf klasdj flksadj fşlajdf laşsdjfşlaksdjfşlk sajşlsadjf şlkasdj flkajsdşlf jasdşlfkjasşlfjaşslk djfşlasj şlkasj dflşksdj flşksadjf lşaksdjf şlaskdjf"
                )
              }
            >
              Read More
            </button>
          </div>
        </div>
        <div className="line"/>
        <div className="news-content">
          <div className="news-header-date">
            <h3 className="news-header">News Title</h3>
            <div className="news-date">16 May,2023</div>
          </div>

          <div className="news-paragraph">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              asodpfk adfa lmkal apodkfasp malşsdfmaş asdfmşasldmfş adsfa
            </p>
            <button
              className="popup-button"
              onClick={() =>
                handlePopupOpen(
                  "News Title",
                  "16 May, 2023",
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. asdf as fasd fasdf asdf asd fsadf asdf asdf sadf asdf asdf asdf ıasjdf oıasdj foaısdjf oıasdjf aoısdj foasıdj foısdj fsıodfj asopdj faspodıjfsadjfsldkşfjaslkdjf klasdj flksadj fşlajdf laşsdjfşlaksdjfşlk sajşlsadjf şlkasdj flkajsdşlf jasdşlfkjasşlfjaşslk djfşlasj şlkasj dflşksdj flşksadjf lşaksdjf şlaskdjf Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. asdf as fasd fasdf asdf asd fsadf asdf asdf sadf asdf asdf asdf ıasjdf oıasdj foaısdjf oıasdjf aoısdj foasıdj foısdj fsıodfj asopdj faspodıjfsadjfsldkşfjaslkdjf klasdj flksadj fşlajdf laşsdjfşlaksdjfşlk sajşlsadjf şlkasdj flkajsdşlf jasdşlfkjasşlfjaşslk djfşlasj şlkasj dflşksdj flşksadjf lşaksdjf şlaskdjf Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. asdf as fasd fasdf asdf asd fsadf asdf asdf sadf asdf asdf asdf ıasjdf oıasdj foaısdjf oıasdjf aoısdj foasıdj foısdj fsıodfj asopdj faspodıjfsadjfsldkşfjaslkdjf klasdj flksadj fşlajdf laşsdjfşlaksdjfşlk sajşlsadjf şlkasdj flkajsdşlf jasdşlfkjasşlfjaşslk djfşlasj şlkasj dflşksdj flşksadjf lşaksdjf şlaskdjf Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. asdf as fasd fasdf asdf asd fsadf asdf asdf sadf asdf asdf asdf ıasjdf oıasdj foaısdjf oıasdjf aoısdj foasıdj foısdj fsıodfj asopdj faspodıjfsadjfsldkşfjaslkdjf klasdj flksadj fşlajdf laşsdjfşlaksdjfşlk sajşlsadjf şlkasdj flkajsdşlf jasdşlfkjasşlfjaşslk djfşlasj şlkasj dflşksdj flşksadjf lşaksdjf şlaskdjf Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. asdf as fasd fasdf asdf asd fsadf asdf asdf sadf asdf asdf asdf ıasjdf oıasdj foaısdjf oıasdjf aoısdj foasıdj foısdj fsıodfj asopdj faspodıjfsadjfsldkşfjaslkdjf klasdj flksadj fşlajdf laşsdjfşlaksdjfşlk sajşlsadjf şlkasdj flkajsdşlf jasdşlfkjasşlfjaşslk djfşlasj şlkasj dflşksdj flşksadjf lşaksdjf şlaskdjf"
                )
              }
            >
              Read More
            </button>
          </div>
        </div>
        <div className="line"/>
        <div className="news-content">
          <div className="news-header-date">
            <h3 className="news-header">News Title</h3>
            <div className="news-date">16 May,2023</div>
          </div>

          <div className="news-paragraph">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              asodpfk adfa lmkal apodkfasp malşsdfmaş asdfmşasldmfş adsfa
            </p>
            <button
              className="popup-button"
              onClick={() =>
                handlePopupOpen(
                  "News Title",
                  "16 May, 2023",
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. asdf as fasd fasdf asdf asd fsadf asdf asdf sadf asdf asdf asdf ıasjdf oıasdj foaısdjf oıasdjf aoısdj foasıdj foısdj fsıodfj asopdj faspodıjfsadjfsldkşfjaslkdjf klasdj flksadj fşlajdf laşsdjfşlaksdjfşlk sajşlsadjf şlkasdj flkajsdşlf jasdşlfkjasşlfjaşslk djfşlasj şlkasj dflşksdj flşksadjf lşaksdjf şlaskdjf Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. asdf as fasd fasdf asdf asd fsadf asdf asdf sadf asdf asdf asdf ıasjdf oıasdj foaısdjf oıasdjf aoısdj foasıdj foısdj fsıodfj asopdj faspodıjfsadjfsldkşfjaslkdjf klasdj flksadj fşlajdf laşsdjfşlaksdjfşlk sajşlsadjf şlkasdj flkajsdşlf jasdşlfkjasşlfjaşslk djfşlasj şlkasj dflşksdj flşksadjf lşaksdjf şlaskdjf Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. asdf as fasd fasdf asdf asd fsadf asdf asdf sadf asdf asdf asdf ıasjdf oıasdj foaısdjf oıasdjf aoısdj foasıdj foısdj fsıodfj asopdj faspodıjfsadjfsldkşfjaslkdjf klasdj flksadj fşlajdf laşsdjfşlaksdjfşlk sajşlsadjf şlkasdj flkajsdşlf jasdşlfkjasşlfjaşslk djfşlasj şlkasj dflşksdj flşksadjf lşaksdjf şlaskdjf Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. asdf as fasd fasdf asdf asd fsadf asdf asdf sadf asdf asdf asdf ıasjdf oıasdj foaısdjf oıasdjf aoısdj foasıdj foısdj fsıodfj asopdj faspodıjfsadjfsldkşfjaslkdjf klasdj flksadj fşlajdf laşsdjfşlaksdjfşlk sajşlsadjf şlkasdj flkajsdşlf jasdşlfkjasşlfjaşslk djfşlasj şlkasj dflşksdj flşksadjf lşaksdjf şlaskdjf Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. asdf as fasd fasdf asdf asd fsadf asdf asdf sadf asdf asdf asdf ıasjdf oıasdj foaısdjf oıasdjf aoısdj foasıdj foısdj fsıodfj asopdj faspodıjfsadjfsldkşfjaslkdjf klasdj flksadj fşlajdf laşsdjfşlaksdjfşlk sajşlsadjf şlkasdj flkajsdşlf jasdşlfkjasşlfjaşslk djfşlasj şlkasj dflşksdj flşksadjf lşaksdjf şlaskdjf"
                )
              }
            >
              Read More
            </button>
          </div>
        </div>
        <div className="line"/>
        <div className="news-content">
          <div className="news-header-date">
            <h3 className="news-header">News Title</h3>
            <div className="news-date">16 May,2023</div>
          </div>

          <div className="news-paragraph">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              asodpfk adfa lmkal apodkfasp malşsdfmaş asdfmşasldmfş adsfa
            </p>
            <button
              className="popup-button"
              onClick={() =>
                handlePopupOpen(
                  "News Title",
                  "16 May, 2023",
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. asdf as fasd fasdf asdf asd fsadf asdf asdf sadf asdf asdf asdf ıasjdf oıasdj foaısdjf oıasdjf aoısdj foasıdj foısdj fsıodfj asopdj faspodıjfsadjfsldkşfjaslkdjf klasdj flksadj fşlajdf laşsdjfşlaksdjfşlk sajşlsadjf şlkasdj flkajsdşlf jasdşlfkjasşlfjaşslk djfşlasj şlkasj dflşksdj flşksadjf lşaksdjf şlaskdjf Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. asdf as fasd fasdf asdf asd fsadf asdf asdf sadf asdf asdf asdf ıasjdf oıasdj foaısdjf oıasdjf aoısdj foasıdj foısdj fsıodfj asopdj faspodıjfsadjfsldkşfjaslkdjf klasdj flksadj fşlajdf laşsdjfşlaksdjfşlk sajşlsadjf şlkasdj flkajsdşlf jasdşlfkjasşlfjaşslk djfşlasj şlkasj dflşksdj flşksadjf lşaksdjf şlaskdjf Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. asdf as fasd fasdf asdf asd fsadf asdf asdf sadf asdf asdf asdf ıasjdf oıasdj foaısdjf oıasdjf aoısdj foasıdj foısdj fsıodfj asopdj faspodıjfsadjfsldkşfjaslkdjf klasdj flksadj fşlajdf laşsdjfşlaksdjfşlk sajşlsadjf şlkasdj flkajsdşlf jasdşlfkjasşlfjaşslk djfşlasj şlkasj dflşksdj flşksadjf lşaksdjf şlaskdjf Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. asdf as fasd fasdf asdf asd fsadf asdf asdf sadf asdf asdf asdf ıasjdf oıasdj foaısdjf oıasdjf aoısdj foasıdj foısdj fsıodfj asopdj faspodıjfsadjfsldkşfjaslkdjf klasdj flksadj fşlajdf laşsdjfşlaksdjfşlk sajşlsadjf şlkasdj flkajsdşlf jasdşlfkjasşlfjaşslk djfşlasj şlkasj dflşksdj flşksadjf lşaksdjf şlaskdjf Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. asdf as fasd fasdf asdf asd fsadf asdf asdf sadf asdf asdf asdf ıasjdf oıasdj foaısdjf oıasdjf aoısdj foasıdj foısdj fsıodfj asopdj faspodıjfsadjfsldkşfjaslkdjf klasdj flksadj fşlajdf laşsdjfşlaksdjfşlk sajşlsadjf şlkasdj flkajsdşlf jasdşlfkjasşlfjaşslk djfşlasj şlkasj dflşksdj flşksadjf lşaksdjf şlaskdjf"
                )
              }
            >
              Read More
            </button>
          </div>
        </div>
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

export default News;
