import {withSSRContext} from "aws-amplify";

export async function getAuthenticatedServerSideProps({req, res}) {
    const {Auth} = withSSRContext({req})
    try {
        const user = await Auth.currentAuthenticatedUser()
        // console.log('user: ', user)

        return {
            props: {
                authenticated: true,
                user: {
                    username: user.username,
                    attributes: user.attributes
                }
            }
        }
    } catch (err) {
        // console.log('error, user not authenticated')

        // SSR redirect
        res.writeHead(302, {Location: '/profile'}); // TODO move this to a constant or configuration file
        res.end();

        return {
            props: {
                authenticated: false
            }
        }
    }
}