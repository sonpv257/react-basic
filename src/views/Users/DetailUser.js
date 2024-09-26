import React, { useEffect, useState } from "react";
import axios from 'axios';
import {  useNavigate, useParams } from 'react-router-dom';
import './DetailUser.css';
import { VscArrowCircleLeft } from "react-icons/vsc";

const DetailUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            setUser(res && res.data && res.data.data ? res.data.data : {});
        };

        fetchUser();
    }, [id]);

    const handleBackButton = () => {
        navigate('/user');
    };

    let isEmptyObj = Object.keys(user).length === 0;

    return (
        <>
            {isEmptyObj === false &&
                <div className="detail-container">
                    <div className="user-detail-card">
                        <div className="user-profile-section">
                            <div className="profile-card">
                                <div className="profile-image">
                                    <img src={user.avatar || "https://img.icons8.com/bubbles/100/000000/user.png"} alt="User Profile" />
                                </div>
                                <h6>{user.first_name} {user.last_name}</h6>
                            </div>
                        </div>
                        <div className="user-info-section">
                            <div className="user-info-card">
                                <h6 className="section-title">Information</h6>
                                <div className="info-row">
                                    <div className="info-item">
                                        <p>Email</p>
                                        <h6 className="info-detail">{user.email}</h6>
                                    </div>
                                    <div className="info-item">
                                        <p>Phone</p>
                                        <h6 className="info-detail">N/A</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="back-user">
                       <span title="Back" onClick={handleBackButton}><VscArrowCircleLeft/></span>
                    </div>
                </div>
            }
        </>
    );
}


export default DetailUser;
