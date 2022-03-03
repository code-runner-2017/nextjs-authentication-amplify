import {useAuthenticatedUser} from "../src/hooks/useAuthenticatedUser";

function ProtectedClient() {
  const user = useAuthenticatedUser();

  return user && <h1>Hello {user.username} from client route!</h1>
}

export default ProtectedClient