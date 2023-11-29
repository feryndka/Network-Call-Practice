import { useEffect, useState } from "react"
import { getUsers } from "../api/userApi"

export default function User() {
    const [user, setUser] = useState([])

    useEffect(() => {
        getUsers()
        .then((res) => {
            setUser(res.data)
        })
        .catch((err) => {
            console.log("err => ", err)
        })
    },[])

    return (
        <>
            <div className="card">
                <table>
                    <thead>
                        <tr>
                            <td>NAME</td>
                            <td>EMAIL</td>
                            <td>PASSWORD</td>
                        </tr>
                    </thead>
                    {user.map((item, index) => {
                        return (
                            <tbody key={index} className="item">
                                <tr>
                                    <td>{ item.name }</td>
                                    <td>{ item.email }</td>
                                    <td>{ item.password }</td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>
        </>
    )
}