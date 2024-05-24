import {
  IonHeader,
  IonTitle,
  IonContent,
  IonIcon,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonPage,
} from '@ionic/react';
import { notificationsOutline, receiptOutline, checkmarkCircleOutline, syncCircleOutline, closeCircleOutline } from 'ionicons/icons';
import React from 'react';
import Logo from '../img/logo.png';
import Edu from '../img/eduardo.png';

const Index: React.FC = () => {
  return (
      <IonPage>
        <IonHeader>        
          <IonTitle className="cabeca">
            <img src={Logo} alt="imagem smart task" /><br />
            <strong>Smart Task</strong>
          </IonTitle>     
        
          <div className="principal">
            <div className="ripple-parent circle">
              <img src={Edu} alt="foto" />
            </div><br />
            <div>
              <h6>Olá,<strong> Eduardo</strong></h6>
            </div>
            <div className="notificacao">
              <IonIcon icon={notificationsOutline} />
            </div>
          </div>
        </IonHeader>

        <IonContent fullscreen={true}>
          <br /><strong className="corpo">Tasks Mensais</strong>
          <div className="cartao">
            <div className="card">
              <IonCardHeader>
                <IonIcon icon= {receiptOutline} />
                <IonCardTitle><strong>68 Projetos</strong></IonCardTitle>
                <IonCardSubtitle>Todos</IonCardSubtitle>
              </IonCardHeader>
            </div>

            <div className="card">
              <IonCardHeader>
                <IonIcon icon={checkmarkCircleOutline} />
                <IonCardTitle><strong>36 Projetos</strong></IonCardTitle>
                <IonCardSubtitle>Completos</IonCardSubtitle>
              </IonCardHeader>
            </div>
          </div>

          <div className="cartao">
            <div className="card">
              <IonCardHeader>
                <IonIcon icon={syncCircleOutline} />
                <IonCardTitle><strong>11 Projetos</strong></IonCardTitle>
                <IonCardSubtitle>Em Andamento</IonCardSubtitle>
              </IonCardHeader>
            </div>

            <div className="card">
              <IonCardHeader>
                <IonIcon icon={closeCircleOutline} />
                <IonCardTitle><strong>3 Projetos</strong></IonCardTitle>
                <IonCardSubtitle>Cancelados</IonCardSubtitle>
              </IonCardHeader>
            </div>
          </div>
          
          <div>
            <strong className="corpo">Progresso das Tarefas</strong>

            <div>
              <div className="tarefas">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                <span className="material-symbols-outlined"> stacks </span>                         
                <div>
                  <h6><b>Tarefa 1</b></h6>
                  <p>Descrição da Tarefa</p> 
                </div>              
              </div>

              <div className="tarefas">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                <span className="material-symbols-outlined"> stacks </span>                         
                <div>
                  <h6><b>Tarefa 2</b></h6>
                  <p>Descrição da Tarefa</p> 
                </div>              
              </div>

              <div className="tarefas">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                <span className="material-symbols-outlined"> stacks </span>                         
                <div>
                  <h6><b>Tarefa 3</b></h6>
                  <p>Descrição da Tarefa</p> 
                </div>              
              </div>
            </div>
          </div>
        </IonContent>
      </IonPage>
  );
};

export default Index;
