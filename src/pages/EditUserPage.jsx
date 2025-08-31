import React, { useMemo } from "react"
import { useParams, useNavigate } from "react-router-dom"
import UserForm from "../components/users/UserForm"
import useUsers from "../hooks/useUsers"

export default function EditUserPage(){
  const { id } = useParams()
  const navigate = useNavigate()
  const { users, updateOne, loading, error } = useUsers()
  const user = useMemo(() => users.find(u => String(u.id) === String(id)), [users, id])
  const handle = async payload => {
    const res = await updateOne(id, payload)
    if(res.ok) navigate("/")
    return res
  }
  return (
    <div>
      {error && <div className="toast error">{error}</div>}
      <UserForm initial={user} onSubmit={handle} loading={loading} />
    </div>
  )
}