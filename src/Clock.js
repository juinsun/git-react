import React from 'react';
import styled from 'styled-components';
import './Clock.css';

class Clock extends React.Component {
    state = {
        date : new Date()
    };

    render() {
        const { date } = this.state;
       
        return (
            <div className="Container">
                <CurDate>
                    {date.getFullYear()} {"년"}
                    {date.getMonth()+1 < 10 ? "0" + (date.getMonth()+1) : date.getMonth()}{"월"}
                    {date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}{"일 "}
                    {date.getHours() < 10 ? "0" + date.getHours() : date.getHours()} {" : "}
                    {date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()} {" : "}
                    {date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()}
                </CurDate>
            </div>
        );
    }

    getDate = () => {
        this.setState({
            date: new Date()
        });
    };

    componentDidMount() {
        this.oneMinuteCall = setInterval(() => this.getDate(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.oneMinuteCall);
    }
}
const CurDate = styled.div``;



export default Clock;