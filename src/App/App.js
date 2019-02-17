import React, { useState } from 'react';

import { AppLayout, Subscribe, Presentation, Form, Input, Button, News } from './styledComponents';
import firebase from '../firebase';

function App() {
  const [email, setEmail] = useState('');
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  function registerUserMail() {
    firebase
      .firestore()
      .collection('users')
      .add({ email });

    setFormSubmitted(true);
  }

  return (
    <AppLayout>
      <Subscribe>
        <h1>Tournois Pokemon Go Bordeaux</h1>
        <Presentation>
          <p>
            Ce projet a été pour permettre aux joueurs de Pokemon Go sur Bordeaux et alentours de se regrouper afin de
            participer à des tournois de la{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://silph.gg/">
              Silph Road
            </a>
            .
          </p>
          <p>
            Si vous êtes intéressé par l{"'"}initiative n{"'"}hésitez pas à rejoindre{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/mR25Vq">
              ce serveur discord
            </a>{' '}
            utilisé pour l{"'"}organisation de potentiels tournois.
          </p>
        </Presentation>
        <p>
          Si tu souhaite t{"'"}inscrire pour participer à un tournoi, n{"'"}hésite pas à rentrer ton mail :
        </p>
        <Form onSubmit={event => event.preventDefault()}>
          <Input type="email" onChange={event => setEmail(event.target.value)} placeholder="email" />
          <Button type="submit" onClick={registerUserMail} disabled={isFormSubmitted}>
            s{"'"}inscrire
          </Button>
        </Form>
      </Subscribe>
      <News>
        <h3>Dernières News :</h3>
      </News>
    </AppLayout>
  );
}

export default App;
