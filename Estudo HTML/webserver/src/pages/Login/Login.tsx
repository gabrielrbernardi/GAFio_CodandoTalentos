import React, {useState, ChangeEvent, FormEvent, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useCookies } from 'react-cookie';
import jwt from 'jsonwebtoken';
import Carousel from 'react-bootstrap/Carousel';

import './login.css';

import { InputText } from 'primereact/inputtext';
import loginFiocruzCustomImage from '../../assets/fiocruzFrente.jpeg';
import loginFiocruzCasteloImage from '../../assets/fiocruzCastelo.jpg';
import loginBanner from '../../assets/fiocruzBanner.jpg';
import api from '../../services/api';
import ToastComponent from '../../components/Toast';

const Login = () => {
    useEffect(() => {
        document.title = 'GAFio | Login';
    }, []);

    return (
        <div>
            <div className="row m-5"> 
                    {/* <img className="rounded col-sm-7 " src={loginBanner} alt="Banner"/> */}
                    {/* <img className="rounded col-sm-7 " src={loginFiocruzCustomImage} alt="Banner"/> */}
                <Carousel className="rounded col-sm-7 d-none d-md-block" activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img className="d-block w-100" style={{"maxHeight": "440px"}} src={loginFiocruzCustomImage} alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" style={{"maxHeight": "440px"}} src={loginFiocruzCasteloImage} alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" style={{"maxHeight": "440px"}} src={loginBanner} alt="Third slide" />
                    </Carousel.Item>
                </Carousel>
                <div className="card col-md-5 p-5 bg-light shadow-lg float-right text-center">
                    <form className="was-validated pb-2" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <InputText type="email" style={{width: '100%'}} id="email" name="email" onChange={handleInputChange} placeholder="Digite seu email" required autoFocus autoComplete="off"/>
                        
                        <div className="valid-feedback text-left">Válido.</div>
                        <div className="invalid-feedback text-left">Preencha este campo.</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Senha:</label>
                        <InputText type="password" style={{width: '100%'}} id="password" name="senha" onChange={handleInputChange} minLength={8} placeholder="Digite sua senha" required/>
                        
                        <div className="valid-feedback text-left">Válido.</div>
                        <div className="invalid-feedback text-left">Preencha este campo.</div>
                    </div>
                    {
                        enableSubmitButton === 0
                        ? <button type="submit" className="btn btn-info btn-primary disabled mt-2 mb-3" disabled>Entrar</button>
                        : <button type="submit" className="btn btn-info btn-primary mt-2 mb-3">Entrar</button>
                    }
                    </form>
                    <div col-1>
                        <span>Ainda não possui cadastro?</span><br/>
                        <Link to="/signUp">
                            <span className="text-info">Crie já o seu</span>
                        </Link>
                    </div>
                </div>
                {getToast &&
                    <ToastComponent messageType={getMessageType} messageTitle={getMessageTitle} messageContent={getMessageContent}/>
                }
            </div>
        </div>
    )
}

export default Login;