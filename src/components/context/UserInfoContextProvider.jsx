import React,{useState} from 'react'
import UserInfoContext from './UserInfoContext';


const UserInfoContextProvider = ({children}) => {

    const [userInfo,setUserInfo] = useState(null)
    const [watchlist, setWatchlist] = useState(null);

    return (
        <UserInfoContext.Provider value={{userInfo,setUserInfo, watchlist, setWatchlist}}>
            {children}
        </UserInfoContext.Provider>
    )
}

export default UserInfoContextProvider
