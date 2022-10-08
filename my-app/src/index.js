import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';
import Accommodate from './chapter_07/Accommodata';
import ConfirmButton from './chapter_08/ConfirmButton';
import LandingPage from './chapter_09/LandingPage';
import AttendanceBook from './chapter_10/AttendanceBook';
import SignUp from './chapter_11/SignUp';

const root = ReactDOM.createRoot(document.getElementById('root'));

/* //챕터 4
setInterval(() => {
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>
  );
}, 1000); 
  */
  

/* //챕터5
root.render(
  <React.StrictMode>
    <CommentList />
  </React.StrictMode>
);  */


/* //챕터6
root.render(
  <React.StrictMode>
    <NotificationList />
  </React.StrictMode>
);  */

/* // 챕터7
root.render(
  <React.StrictMode>
    <Accommodate />
  </React.StrictMode>
);  */

/* // 챕터8
root.render(
  <React.StrictMode>
    <ConfirmButton />
  </React.StrictMode>
);  */

/* // 챕터9
root.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);  */

/* // 챕터10
root.render(
  <React.StrictMode>
    <AttendanceBook />
  </React.StrictMode>
);  */

// 챕터11
root.render(
  <React.StrictMode>
    <SignUp />
  </React.StrictMode>
); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
