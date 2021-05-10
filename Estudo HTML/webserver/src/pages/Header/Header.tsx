import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { MdPersonOutline, MdNotificationsNone } from 'react-icons/md';
import { useCookies } from 'react-cookie';
import { Dropdown, Button, Badge } from 'react-bootstrap';

import '../Home/Home.css';
import './Header.css';

import api from '../../services/api';
import ToastComponent from '../../components/Toast';

const Header = () => {
    return (
        <div className="no-select">
            <title>GAFio</title>
            <div className="container-fluid m-0 p-0">
                <nav className="navbar navbar-expand-sm header-background navbar-dark">
                    {/* <Link to="/home"> */}
                    <p onClick={toHome} className="navbar-brand m-0 cursor-pointer text-small">GAFio</p>
                    {/* </Link> */}
                    <div className="ml-auto text-dark">
                    </div>
                    <div className="ml-auto text-dark">
                        <Button onClick={toNotifications} variant="outline-dark">
                            <p className="d-inline">Notificações</p>
                            <MdNotificationsNone className="ml-2" size={30} />
                            {
                                notificationsLength > 0
                                    ?
                                    <Badge variant="danger">{notificationsLength}</Badge>
                                    :
                                    // <Badge variant="secondary">{notificationsLength}</Badge>
                                    <></>
                            }

                        </Button>
                        <Dropdown className="ml-2 d-inline">
                            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                                <strong className="text-capitalize">{userName}</strong>

                                <MdPersonOutline className="ml-2" size={30} />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={myProfile}>Gerenciar sua conta</Dropdown.Item>
                                {tipoUsuario === 'A'
                                    ? <Dropdown.Item className="bg-secondary-custom" onClick={toUsers}>Gerenciar usuários</Dropdown.Item>
                                    : <></>
                                }
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={logoutFunction}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        {/* <a className="navbar-brand cursor-pointer ml-auto text-dark">teste</a> */}
                    </div>
                </nav>
            </div>
            <div className="container-fluid bg-light shadow-lg mb-5">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-auto mx-2">
                        <Link className="text-decoration-none home-label" to="/home">
                            HOME
                        </Link>
                    </div>
                    <div className="col-md-auto mx-2">
                        <Link className="text-decoration-none" to="/medicalRecords">
                            PRONTUÁRIOS
                        </Link>
                    </div>
                    <div className="col-md-auto mx-2">
                        <Link className="text-decoration-none" to="/registrations">
                            CADASTROS
                        </Link>
                    </div>
                    <div className="col-md-auto mx-2">
                        <Link className="text-decoration-none" to="/dashboard">
                            DASHBOARD
                        </Link>
                    </div>
                    <div className="col-md-auto mx-2">
                        <Link className="text-decoration-none" to="/microbiology">
                            MICROBIOLOGIA
                        </Link>
                    </div>
                    <div className="col-md-auto mx-2">
                        <Link className="text-decoration-none" to="/recomendations">
                            RECOMENDAÇÕES CCIH
                        </Link>
                    </div>
                    <div className="col-md-auto mx-2">
                        <Link className="text-decoration-none" to="/history">
                            HISTÓRICO
                        </Link>
                    </div>

                </div>
            </div>
            <div className="position-absolute arrow-left" style={{ left: '0px', top: '50px' }}>
                <button className="btn" onClick={handleBackButton}>
                    <FiArrowLeft size={20} />
                </button>
            </div>
            {getToast &&
                <ToastComponent messageType={getMessageType} messageTitle={getMessageTitle} messageContent={getMessageContent} lifeTime={getLifeTime} />
            }
        </div>
    )
}

export default Header;