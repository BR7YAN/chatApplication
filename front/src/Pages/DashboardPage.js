import React from 'react';

const DashboardPage = () => {
    return (
        <div className="card">
            <div className="cardHeader">chatRooms</div>
            <div className="cardBody">
                <div className="inputGroup">
                    <label html="email">Email</label>
                    <input
                        type="text"
                        name="chatroomName"
                        id="chatroomName"
                        placeholder="Chatterbox Nepal" />
                </div>
                <button>Create Chatroom</button>
                <div className="chatroom">
                    <div>Happy Newbie</div>
                    <div className="join">Join</div>
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;