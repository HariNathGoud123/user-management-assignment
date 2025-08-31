import React from "react"
import UserForm from "../components/users/UserForm"
import useUsers from "../hooks/useUsers"
import { useNavigate } from "react-router-dom"

export default function AddUserPage(){
  const { add, loading, error } = useUsers()
  const navigate = useNavigate()
  const handle = async payload => {
    const res = await add(payload)
    if(res.ok) navigate("/")
    return res
  }
  return (
    <div>
      {error && <div className="toast error">{error}</div>}
      <UserForm onSubmit={handle} loading={loading} />
    </div>
  )
}