import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Calendar: React.FC = () => {

    return (
        <IonPage>
            <IonHeader >
                <IonToolbar color='primary'>
                    <IonTitle>Calendário</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                API do Calendário vai ficar nesta pagina.
            </IonContent>
        </IonPage>
    );
};

export default Calendar;