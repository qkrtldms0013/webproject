import { useState } from 'react';
import axios from 'axios';

function Login() {
    //구조분해 할당
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');
    const [name, setName] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickBtn = async() =>{
      if(!validateCheck()) return;

        try {
            const response = await axios.post('http://localhost:3000/token/login', { id, pwd });
            const { token, userName } = response.data;
            localStorage.setItem('jwt', token);
            setName(userName);
            setIsLoggedIn(true);
            alert('로그인 성공! 토큰이 저장되었습니다.');
          } catch (error) {
            alert('로그인 실패: ' + error);
          }
    };

    const logOutBtn = async() => {
      localStorage.removeItem('jwt');
      setIsLoggedIn(false);
      setName('');
      setId('');
      setPwd('');
      alert('로그아웃 되었습니다.');
    };


    const validateCheck = () => {
      if(!id || !pwd) {
        alert('ID와 비밀번호를 모두 입력하시오');
        return false;
      }
      if(pwd.length < 4) {
        alert('비밀버호는 4자리 이상 입력하시오');
        return false;
      }
      return true;
    };

    
    console.log(`login lender , ${id}, ${pwd}`);
    return (
      <div>
        {isLoggedIn ? (
        <div>
          <h2>환영합니다! {name}님</h2>
          <button onClick={logOutBtn}>로그아웃</button>
        </div>
      ) : (
      <div>
        <h2>Login {id}</h2>
        <input 
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
        <button onClick={onClickBtn}>로그인 하기</button>
      </div>
    )}
    </div>
    );
  }
  
  export default Login;