import React, { useState } from 'react';

import { ConfirmationLabel, SubscribeLayout, Presentation, Form, Input, Button } from './styledComponents';
import firebase from '../../firebase';

function Subscribe() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  function registerUserMail() {
    if (username.length !== 0) {
      firebase
        .firestore()
        .collection('users')
        .doc(username)
        .set({ email });
    } else {
      firebase
        .firestore()
        .collection('users')
        .add({ email });
    }

    setFormSubmitted(true);
  }

  return (
    <SubscribeLayout>
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
        Si tu souhaite t{"'"}inscrire pour participer à un tournoi, n{"'"}hésite pas à rentrer ton pseudo et ton mail :
      </p>
      <Form onSubmit={event => event.preventDefault()}>
        <Input
          name="username"
          onChange={event => setUsername(event.target.value)}
          placeholder="Pseudo (optionnel)"
          type="text"
        />
        <Input
          name="email"
          onChange={event => setEmail(event.target.value)}
          placeholder="email"
          required
          type="email"
        />
        <Button type="submit" onClick={registerUserMail} disabled={email.length === 0 || isFormSubmitted}>
          s{"'"}inscrire
        </Button>
        <ConfirmationLabel className={isFormSubmitted ? 'visible' : 'hidden'}>
          ton inscription a bien été enregistrée
        </ConfirmationLabel>
      </Form>
    </SubscribeLayout>
  );
}

export default Subscribe;
