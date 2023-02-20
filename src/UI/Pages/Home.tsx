import React, { useContext } from 'react'
import { Context } from '../../Context/ContextWrapper'
import { ReqWhiteList } from '../Components/ReqWhiteList/ReqWhiteList';
import { ViewReqWL } from '../Components/ViewReqWL/ViewReqWL';

const Home = () => {
    const { user } = useContext(Context);
    console.log(user)

    if(!user.address) {
        return <p className='text-center mb-5' style={{ fontSize: "3rem", marginTop: "1rem" }}>Войдите в аккаунт</p>
    }

    return (
        <div>
            <p className='text-center mb-5' style={{ fontSize: "2rem", marginTop: "1rem" }}>Ваш логин: {user.login}</p>
            <p className='text-center mb-5' style={{ fontSize: "2rem", marginTop: "1rem" }}>Ваш адрес: {user.address}</p>
            <p className='text-center mb-5' style={{ fontSize: "2rem", marginTop: "1rem" }}>Ваш общий баланс: {user.balance}</p>
            {user.role == 1 ? <p className='text-center mb-5' style={{ fontSize: "2rem", marginTop: "1rem" }}>У вас {user.seedToken} seed токенов</p> : undefined}
            <p className='text-center mb-5' style={{ fontSize: "2rem", marginTop: "1rem" }}>У вас {user.privToken} private токенов</p>
            <p className='text-center mb-5' style={{ fontSize: "2rem", marginTop: "1rem" }}>У вас {user.publToken} public токенов</p>
            {user.inWhiteList ?  <p className='text-center mb-5' style={{ fontSize: "2rem", marginTop: "1rem" }}>Вы в вайтлисте</p>: <ReqWhiteList address={user.address}/>}
            {user.role == 2 ? <ViewReqWL address={user.address}/> : undefined}
        </div>
    )
}
export default Home
