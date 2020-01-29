***
component : html을 반환하는함수

jsx :javascript의 안의 html

state: 동적 데이터와 함께 작업할 때 만들어져 변하는데이터, 존재하지 않는 데이터,

그리고 생겨나선 그리고선 사라지고 또는 변경된 데이터, 하나인 데이터 그리고 두개가 되고 또는 0이 되는 그런 종류의 것들

function component 가 있는데 왜 class component를 쓰냐? state를 쓰려고.

setstate : setstate를 호출할때 마다 react는 새로운 state와 함께 render function을 호출한다. 

( = setstate를 호출할때 마다 새로운 state와 함께 리렌더링한다.)
```javascript
this.setstate({count : this.state.count + 1 });      
//둘이 같은 코드
this.setstate(current => ({ count: current.count + 1 }));
```
unmounting : component 죽는것 (ex: 페이지 바꿀때)

2017버전 movie_app과 크게 바뀐점 : api를 호출할때 fetch를 사용했는데, axios 사용으로 바꿈.

axios? fetch 위에 있는 작은 layer
***
## Deploy #1 - https://fdsfdsg.github.io/movie_app_2020/

github 기능중 static파일들을 공짜로 호스팅해주는 gh-pages를 이용해 배포

1. 먼저 gh-page 설치  `npm i gh-pages`

2. pakage.JSON에 hompage 추가

3. scripts에 deploy predeploy 추가, (deploy는 build 폴더를 업로드함, build 폴더를 얻는 방법은 npm run build를 실행시키는거임. 글고 deploy 먼저 호출하면 predeploy는 자동적으로 실행됨.)

4. 내용 업데이트했으면 `npm run deploy` 로 재배포해야됨.
***
## Deploy #2 - https://movie-app-sangboom.netlify.com/

```javascript
"start_url":".",
```
menufast에 저 코드 때문에 `package.json` 에서 homepage 부분을 `"homepage": "."` 로 수정해야 정상적으로 배포된다.

귀찮으니까 netlify로는 배포안할꺼임. gh pages로 배포하고 또 바꿔줘야됨. 진짜 

***

```javascript
function App(){
  return <HashRouter>
    <Route path="/" exact={true} component={Home}/>      
    <Route path="/about" component={About} />
  </HashRouter>
}
```
url/#/about 하면 /와 /about 컴포넌트 둘다 렌더링해서 같이 보여주게됨.

exact={true}로 설정하면 / 일때만 렌더링하게끔 해준다. /something 이여도 렌더링 안됨

BrowserRouter 와 HashRouter중 걍 HashRouter 씀. 이유는 github pages에 정확히 설정할때 편하기 때문이다. (업로드하기 편함) BrowserRouter는 그에비해 설정하기 매우 불편. 대신 경로에 `/#/` 없어지고 나옴.

글고 우리는 버튼을 눌렀을때 리액트가 죽고, 새 페이지가 새로고침 되는걸 원하지않는다. 그래서 Navigation이라는 component에 Link라는걸 import 하고 a 대신 Link, href 대신 to를 써서 모든 페이지를 죽이고 새 페이지를 새로고침하지 않고 빠르게 접근할 수 있다.

Router 안에는 navigation이 있어야됨.

컴포넌트가 여러 엘리먼트를 반환하는건 흔한 일이다. Fragments는 DOM에 별도의 노드를 추가하지않고 여러 자식들을 그룹화 할 수 있다.

***
영화 목록들중 한개를 누르면 그 영화에 대한 자세한 정보가 나오도록 하고싶다. 그러기 위해선 route props를 알아야된다.
```javascript
function Movie({ year, title, summary, poster, genres }) {
  return (
    <Link
     to={{
      pathname:"/movie-detail",
...

function App() {
  return (
    <HashRouter>
      ...
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
}
```
영화 상세정보를 클릭해서 자세히 보고싶을땐? ex) localhost:3000/#/movie/3709
***
```javascript
function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <Link
     to={{
      pathname:`/movie/${id}`,
...

function App() {
  return (
    <HashRouter>
      ...
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}
```
현재 코드를 보면, home.js에 state가 있다. home에서 시작해서 about 버튼을 클릭하고 home으로 다시 가게 되면 state에 데이터를 다시 불러와야되는데 이는 좋지않다.

redux를 이용하면 스크린 외부 어딘가에 state를 저장해놔서 로딩했던걸 또 할 필요없이 다음 접근때는 빠르게 접근하도록 해준다.

