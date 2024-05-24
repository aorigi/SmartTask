import { IonContent, IonHeader, IonPage, IonImg, IonButton, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import Logo from '../img/logo.png';
import JorneyImage from '../img/jorney.svg';
import '../styles/style.css';

const Jorney: React.FC = () => {

    return (
        <IonPage>
            <IonContent >
                <div className="ion-content-centered">
                    <div>
                        <div className='login-title ion-padding'>
                            <IonImg className='LogoLogin' src={Logo} alt="Logo"></IonImg>
                            <h1 className='inter-black-strong-32'>SmartTask</h1>
                        </div>

                        <IonImg className='JorneyImg' src={JorneyImage} alt="teste"></IonImg>

                        <IonButton className='login-button jorneyMargin' type='submit' expand='block'>Iniciar Jornanda</IonButton>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Jorney;