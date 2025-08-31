import React, { useMemo, useState } from "react"
import useUsers from "../hooks/useUsers"
import Spinner from "../components/common/Spinner"
import ErrorMessage from "../components/common/ErrorMessage"
import UserList from "../components/users/UserList"

export default function HomePage(){
  const {users,loading,error,remove,reload} = useUsers()
  const [q,setQ]=useState("")
  const header = useMemo(()=> (<div className="card" style={{marginBottom:12}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><div><h1>User Management</h1><div className="helper">CRUD with JSONPlaceholder</div></div><div className="actions"><button className="btn btn-muted" onClick={reload}>Refresh</button></div></div></div>),[reload])
  return (
    <div>
      {header}
      {error && <ErrorMessage message={error} />}
      {loading ? <div className="card"><Spinner /></div> : <UserList users={users} onDelete={remove} q={q} setQ={setQ} />}
    </div>
  )
}