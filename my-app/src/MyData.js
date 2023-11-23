const user = {
    name:"Roshan",
    imgurl:'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
}

export function Profile(){
    return(
        <>
        <h1>{user.name}</h1>
        <img className="avatar"
        src = {user.imgurl}
        alt = {'Photo of' + user.name}
        style={{
            height:user.imageSize
        }}
        ></img>
        </>
    )
}