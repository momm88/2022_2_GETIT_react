import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id : 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id : 2,
        message: "점심 식사 시간입니다.",
    },
    {
        id : 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
]

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications : [],
        };
    }
    // 자바스크립트의 setInterval() 함수를 사용해 1초 마다 정해진 작업을 수행
    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(() => {
            if(notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                // [state 업데이트하기 위해 setState()를 사용함]
                this.setState({
                    notifications: notifications,
                });
            }
            else {
                //배열을 비워주는 작업
                this.setState({
                    notifications: [],
                });
                clearInterval(timer);
            }
        }, 1000);
    }
    render() {
        return (
            <div>
                {this.state.notifications.map((notifications) => {
                    return (
                        <Notification
                            key = {notifications.id}
                            id = {notifications.id}
                            message={notifications.message} />
                    );
                })}
            </div>
        );
    }
}

export default NotificationList;