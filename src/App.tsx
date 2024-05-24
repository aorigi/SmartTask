import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import './styles/fonts.css';
import './styles/index.css';
import './styles/jorney.css';
import './styles/login.css';
import './styles/style.css';
import './styles/userpage.css';


import Login from './pages/Login';
import Register from './pages/Register';
import Index from './pages/Index';
import UserPage from './pages/Userpage';

import { home, person, checkbox, calendar } from 'ionicons/icons';
import Calendar from './pages/Calender';
import Jorney from './pages/Jorney';


setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs >
        <IonRouterOutlet>
          <Route component={Index} path="/index" exact={true} />
          <Route exact path="/" render={() => <Redirect to="/index" />} />

          <Route component={Login} path="/login" exact={true}/>
          <Route exact path="/" render={() => <Redirect to="/index" />} />

          <Route component={Register} path="/register" exact={true}/>
          <Route exact path="/" render={() => <Redirect to="/index" />} />

          <Route component={UserPage} path="/userpage" exact={true}/>
          <Route exact path="/" render={() => <Redirect to="/index" />} />          

          <Route component={Calendar} path="/Calendar" exact={true}/>
          <Route exact path="/" render={() => <Redirect to="/index" />} />    

          <Route component={Jorney} path="/Jorney" exact={true}/>
          <Route exact path="/" render={() => <Redirect to="/jorney" />} />  
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/index">
              <IonIcon icon={home} />
              <IonLabel>Início</IonLabel>
            </IonTabButton>
        
          <IonTabButton tab="login" href="/login">
            <IonIcon icon={checkbox} />
            <IonLabel>Login</IonLabel>
          </IonTabButton>
        
          <IonTabButton tab="calendar" href="/calendar">
            <IonIcon icon={calendar} />
            <IonLabel>Calendário</IonLabel>
          </IonTabButton>
              
          <IonTabButton tab="register" href="/register">
            <IonIcon icon={person} />
            <IonLabel>Registro</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;


{/*<IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/" to="/home" />
          {/*
          Use the render method to reduce the number of renders your component will have due to a route change.

          Use the component prop when your component depends on the RouterComponentProps passed in automatically.
        */}
          {/* <Route path="/home" render={() => <HomePage />} exact={true} />
          <Route path="/radio" render={() => <RadioPage />} exact={true} />
          <Route path="/library" render={() => <LibraryPage />} exact={true} />
          <Route path="/search" render={() => <SearchPage />} exact={true} /> */}
        /*</IonRouterOutlet>

        {/*<IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Início</IonLabel>
          </IonTabButton>

          <IonTabButton tab="radio" href="/radio">
            <IonIcon icon={radio} />
            <IonLabel>Tarefas</IonLabel>
          </IonTabButton>

          <IonTabButton tab="library" href="/library">
            <IonIcon icon={library} />
            <IonLabel>Calendário</IonLabel>
          </IonTabButton>

          <IonTabButton tab="search" href="/search">
            <IonIcon icon={search} />
            <IonLabel>Perfil</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>*/