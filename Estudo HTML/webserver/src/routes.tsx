import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Root from './pages/Root/Root';
import Home from './pages/Home/Home';

import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import MyProfile from './pages/Header/MyProfile/MyProfile';
import Users from './pages/Users/Users';

import Notifications from './pages/Header/Notifications/Notifications';
import HeaderNotLogin from './pages/Header/HeaderNotLogin';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';

import Dashboard from './pages/Dashboard/Dashboard';

import MedicalRecords from './pages/MedicalRecords/MedicalRecords';
import MedicalRecordsCreate from './pages/MedicalRecords/Create/Create';

import Registrations from './pages/Registrations/Registrations';

import Patient from './pages/Registrations/Patient/Patient';
import PatientCreate from './pages/Registrations/Patient/Create/Create';

import Diseases from './pages/Registrations/Diseases/Diseases';
import CreateDisease from './pages/Registrations/Diseases/create/CreateDisease';

import Medicines from './pages/Registrations/Medicines/Medicines';

import CreateMedicine from './pages/Registrations/Medicines/create/CreateMedicine';

import History from './pages/History/History';

import NotFound from './pages/NotFound/NotFound';

import UnderDevelopment from './pages/UnderDevelopment/UnderDevelopment';

import Assessment from './pages/MedicalRecords/Assessment/Assessment'
import AssessmentCreate from './pages/MedicalRecords/Assessment/Create/Create'

import Microbiology from './pages/Microbiology';
import MicrobiologyForm from "./pages/Microbiology/MicrobiologyForm";
import Recomendations from './pages/Recomendations/Recomendations';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    path="/"
                    render={() => (
                        <div>
                            <HeaderNotLogin />
                            <Root />
                            <Footer />
                        </div>
                    )}
                    exact
                />
                <Route
                    path="/login"
                    render={() => (
                        <div>
                            <HeaderNotLogin />
                            <Login />
                            <Footer />
                        </div>
                    )}
                    exact
                />
                <Route
                    path="/signup"
                    render={() => (
                        <div>
                            <HeaderNotLogin />
                            <SignUp />
                            <Footer />
                        </div>
                    )}
                    exact
                />

                <Route
                    path="/home"
                    render={() => (
                        <div>
                            <Header />
                            <Home />
                            <Footer />
                        </div>
                    )}
                    exact
                />

                <Route
                    path="/registrations"
                    render={() => (
                        <div>
                            <Header />
                            <Registrations />
                            <Footer />
                        </div>
                    )}
                    exact
                />
                <Route
                    path="/registrations/medicines"
                    render={() => (
                        <div>
                            <Header />
                            <Medicines />
                            <Footer />
                        </div>
                    )}
                    exact
                />
                <Route
                    path="/registrations/medicines/create"
                    render={() => (
                        <div>
                            <Header />
                            <CreateMedicine />
                            <Footer />
                        </div>
                    )}
                    exact
                />
                <Route
                    path="/registrations/diseases"
                    render={() => (
                        <div>
                            <Header />
                            <Diseases />
                            <Footer />
                        </div>
                    )}
                    exact
                />
                <Route
                    path="/registrations/diseases/create"
                    render={() => (
                        <div>
                            <Header />
                            <CreateDisease />
                            <Footer />
                        </div>
                    )}
                    exact
                />
                <Route
                    path="/registrations/patient"
                    render={() => (
                        <div>
                            <Header />
                            <Patient />
                            <Footer />
                        </div>
                    )}
                    exact
                />
                <Route
                    path="/registrations/patient/create"
                    render={() => (
                        <div>
                            <Header />
                            <PatientCreate />
                            <Footer />
                        </div>
                    )}
                    exact
                />

                <Route
                    path="/medicalRecords/create"
                    render={() => (
                        <div>
                            <Header />
                            <MedicalRecordsCreate />
                            <Footer />
                        </div>
                    )}
                    exact
                />
                <Route
                    path="/medicalRecords"
                    render={() => (
                        <div>
                            <Header />
                            <MedicalRecords />
                            <Footer />
                        </div>
                    )}
                    exact
                />
                <Route
                    path="/medicalRecords/assessment"
                    render={() => (
                        <div>
                            <Header />
                            <Assessment />
                            <Footer />
                        </div>
                    )}
                    exact
                />
                <Route
                    path="/medicalRecords/assessment/create"
                    render={() => (
                        <div>
                            <Header />
                            <AssessmentCreate />
                            <Footer />
                        </div>
                    )}
                    exact
                />

                <Route
                    path="/dashboard"
                    render={() => (
                        <div>
                            <Header />
                            <Dashboard />
                            <Footer />
                        </div>
                    )}
                    exact
                />

                <Route
                    path="/history"
                    render={() => (
                        <div>
                            <Header />
                            <History />
                            <Footer />
                        </div>
                    )}
                    exact
                />

                <Route
                    path="/myProfile"
                    render={() => (
                        <div>
                            <Header />
                            <MyProfile />
                            <Footer />
                        </div>
                    )}
                    exact
                />
                <Route
                    path="/users"
                    render={() => (
                        <div>
                            <Header />
                            <Users />
                            <Footer />
                        </div>
                    )}
                    exact
                />

                <Route
                    path="/notifications"
                    render={() => (
                        <div>
                            <Header />
                            <Notifications />
                            <Footer />
                        </div>
                    )}
                    exact
                />
                <Route
                    path="/notFound"
                    render={() => (
                        <div>
                            <Header />
                            <NotFound />
                            <Footer />
                        </div>
                    )}
                    exact
                />
                <Route
                    path="/underDevelopment"
                    render={() => (
                        <div>
                            <Header />
                            <UnderDevelopment />
                            <Footer />
                        </div>
                    )}
                    exact
                />

                <Route
                    path="/microbiology"
                    render={() => (
                        <div>
                            <Header />
                            <Microbiology />
                            <Footer />
                        </div>
                    )}
                    exact
                />

                <Route
                    path="/microbiology/create"
                    render={() => (
                        <div>
                            <Header />
                            <MicrobiologyForm />
                            <Footer />
                        </div>
                    )}
                />
                <Route
                    path="/recomendations"
                    render={() => (
                        <div>
                            <Header />
                            <Recomendations />
                            <Footer />
                        </div>
                    )}
                />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;