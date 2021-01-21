import './App.css';
import './css/common.css';
import './css/front.css';

function App() {

  const eventHandler = ()=>{
    alert("안녕하세요");
  }
  return (
    <div className="App">
      <div>
        <div>개발 블로그</div>
        <div className="section-header">
          <span>헬로우 월드</span><br/>
          <talbe className="table">
            <tr>
              <td>상자</td>
            </tr>
          </talbe>
        </div>
      </div>
      <button onClick={eventHandler}>alert 버튼</button>
    </div>
  );
}
export default App;
