import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { useCookies } from 'react-cookie';

import logo from '../../assets/logoFiocruz.png';
import api from '../../services/api';
import ToastComponent from '../../components/Toast';

const Header = () => {
    return (
        <div>
            <div className="container-fluid m-0 p-0">
                <nav className="navbar navbar-expand-sm header-background navbar-dark">
                    <a href="/" className="navbar-brand cursor-pointer text-big">GAFio</a>
                    <a href="/" className="navbar-brand cursor-pointer ml-auto">
                        <img src={logo} alt="logo" className="logo" />
                    </a>
                </nav>
            </div>
            <button className="btn" onClick={handleBackButton}>
                <FiArrowLeft size={20} />
            </button>
            {getToast &&
                <ToastComponent messageType={getMessageType} messageTitle={getMessageTitle} messageContent={getMessageContent} />
            }
        </div>
    )
}

export default Header;