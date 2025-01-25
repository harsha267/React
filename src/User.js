import { useSelector } from "react-redux";


export default function User() {
    const users = useSelector((state) => state.userInfo.eusers);

    console.log('the users: ', users);

    return (
        <>
            <h1>In the USER</h1>
            {
                users.map((user, index) => {
                    return (
                        <div key={index}>
                            <h1>{user.roll}</h1>
                            <h1>{user.name}</h1>
                            <h1>{user.city}</h1>
                        </div>
                    );
                })
            }
        </>
    );
}