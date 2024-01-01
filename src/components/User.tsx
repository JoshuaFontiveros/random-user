import React, { FunctionComponent, ReactElement } from 'react';
import { IonItem, IonItemOption, IonItemOptions, IonItemSliding } from '@ionic/react';
import styled from 'styled-components';
import { User as UserInterface } from '../types/user';

const StyledIonItem = styled(IonItem)`
  --background: #ffffff;
  --border-color: #ffffff;
  --color: #000000;
  --border-radius: 10px;
  --padding-start: 20px;
  --padding-end: 20px;
  --padding-top: 10px;
  --padding-bottom: 10px;
  --margin-bottom: 10px;
`;

interface UserProps {
  data: UserInterface;
}
const User: FunctionComponent<UserProps> = ({ data }): ReactElement => {
  return (
    <IonItemSliding>
      <StyledIonItem>{data.email}</StyledIonItem>
      <IonItemOptions>
        <IonItemOption>Favorite</IonItemOption>
        <IonItemOption color='danger'>Delete</IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};

export default User;
