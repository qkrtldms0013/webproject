import { useState } from 'react';
import axios from 'axios';

function LoginForm(props) {
    const {bgColor, fontColor} = props;
    //구조분해 할당
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');
    const [name, setName] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickBtn = async() =>{
        try {
            const response = await axios.post('http://localhost:3000/token/login', { id, pwd });
            const { token, username } = response.data;
            localStorage.setItem('jwt', token);
            localStorage.setItem('username', user);

            setName(username);

            setIsLoggedIn(true);
            alert('로그인 성공! 토큰이 저장되었습니다.');
          } catch (error) {
            alert('로그인 실패: ' + error);
          }
    };
    

    return (
      <div style={styleData}>
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

    );
  }
  
  export default LoginForm;