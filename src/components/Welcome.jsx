function Welcome(props) {
    const {name} = props;
    return (
        <div>
          <h2>환영합니다! {name}님</h2>
          <button>로그아웃</button>
        </div>
    );
}

export default Welcome;