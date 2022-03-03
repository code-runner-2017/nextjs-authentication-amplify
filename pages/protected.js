import { withSSRContext } from 'aws-amplify'
import {getAuthenticatedServerSideProps} from "../src/auth/getAuthenticatedServerSideProps";

function Protected({ authenticated, user, title }) {
  if (!authenticated) {
    return <h1>Not authenticated</h1>
  }
  return <h1>Hello {user.username} from SSR route! props.title is {title}</h1>
}

export async function getServerSideProps(context) {
    let res = await getAuthenticatedServerSideProps(context); // sets res.props.authenticated and res.props.user (if authenticated)

    if (res.authenticated) {
        // add any other props, eg. fetching data from a backend
        res.props.title = 'example';
        console.log("res ==>", res)
    }

    return res;
}

export default Protected