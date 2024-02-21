import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import App from "./App";
import {createStore, combineReducers, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import scheduleReducer from "./store/reducer/schedules";
import statusReducer from "./store/reducer/status";
import historyReducer from "./store/reducer/history";
import ReduxThunk from "redux-thunk";
import authReducer from "./store/reducer/auth";
import adminAuthReducer from "./store/reducer/admin_auth";
import notificationReducer from "./store/reducer/notifications";
import usersReducer from "./store/reducer/admin_users";
import AdminFeedbackReducer from "./store/reducer/admin_feedbacks";
import adminStatusReducer from "./store/reducer/admin_status";

import HttpsRedirect from 'react-https-redirect';
import 'swiper/swiper-bundle.min.css';



const rootReducer = combineReducers({
    schedules: scheduleReducer,
    status: statusReducer,
    history: historyReducer,
    auth: authReducer,
    admin_auth: adminAuthReducer,
    admin_feedbacks: AdminFeedbackReducer,
    notifications: notificationReducer,
    users: usersReducer,
    admin_status: adminStatusReducer,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

ReactDOM.render(
    <HttpsRedirect>
        <Provider store={store}>
            <App/>
        </Provider>
    </HttpsRedirect>,


    document.getElementById("main")
);
