import UserProfile from "./UserProfile"


function Users({users}) {
  return (
    <>
        <div>
            <h1>Users: </h1>
            {
                users.map((user) => {
                    return(
                        <div>
                            <UserProfile user={user}/>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default Users