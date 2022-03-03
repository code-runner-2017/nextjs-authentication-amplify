import {useRouter} from "next/router";
import {Auth} from "aws-amplify";
import {useEffect, useState} from "react";

export function useAuthenticatedUser() {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        Auth.currentAuthenticatedUser()
            .then(user => setUser(user))
            // if there is no authenticated user, redirect to profile page
            .catch(() => router.push('/profile'))   // TODO move this to a constant or configuration file
    }, []);

    return user;
}