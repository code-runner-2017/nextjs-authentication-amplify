import {useState, useEffect } from 'react';
import {Authenticator,CheckboxField} from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify'
import '@aws-amplify/ui-react/styles.css';
import { I18n } from 'aws-amplify';
import { translations } from '@aws-amplify/ui-react';
import { useAuthenticator } from '@aws-amplify/ui-react';

function Profile() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(user => {
        console.log("User: ", user)
        setUser(user)
      })
      .catch(() => setUser(null))
  }, []);

  return (
      <Authenticator>
          {({ signOut, user }) => (
              <main>
                  <h1>Hello {user.username}</h1>
                  <button onClick={signOut}>Sign out</button>
              </main>
          )}
      </Authenticator>
  )
}

export default Profile;