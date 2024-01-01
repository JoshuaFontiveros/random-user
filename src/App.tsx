import React, { FunctionComponent, ReactElement, useEffect, useState } from 'react';
import { IonApp, IonContent, IonHeader, IonList, IonToolbar } from '@ionic/react';
import axios from 'axios';
import User from './components/User';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import { User as UserInterface } from './types/user';

const App: FunctionComponent = (): ReactElement => {
  const [data, setData] = useState<UserInterface[] | undefined>(undefined);

  useEffect(() => {
    axios
      .get('https://randomuser.me/api/?results=100')
      .then((response) => setData(response.data.results));

    return () => {
      setData(undefined);
    };
  }, []);

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>My App</IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {data?.map((data) => (
            <User data={data} key={data.email} />
          ))}
        </IonList>
      </IonContent>
    </IonApp>
  );
};

export default App;
