### memo
component : html을 반환하는함수
jsx :javascript의 안의 html
state: 동적 데이터와 함께 작업할 때 만들어져 변하는데이터, 존재하지 않는 데이터,
그리고 생겨나선 그리고선 사라지고 또는 변경된 데이터, 하나인 데이터 그리고 두개가 되고 또는 0이 되는 그런 종류의 것들

function component 가 있는데 왜 class component를 쓰냐? state를 쓰려고.

setstate : setstate를 호출할때 마다 react는 새로운 state와 함께 render function을 호출한다. ( = setstate를 호출할때 마다 새로운 state와 함께 리렌더링한다.)
this.setstate({count : this.state.count + 1 });      같은거
this.setstate(current => ({ count: current.count + 1 }));

mounting : 태어나는것
unmounting : component 죽는것 (ex: 페이지 바꿀때)
***
2017버전 movie_app과 크게 바뀐점 : api를 호출할때 fetch를 사용했는데, axios 사용으로 바꿈.

axios? fetch 위에 있는 작은 layer
***
## Deploy - https://fdsfdsg.github.io/movie_app_2020/

github 기능중 static파일들을 공짜로 호스팅해주는 gh-pages를 이용해 배포

1. 먼저 gh-page 설피 `npm i gh-pages`

2. pakage.JSON에 hompage 추가

3. scripts에 deploy predeploy 추가, (deploy는 build 폴더를 업로드함, build 폴더를 얻는 방법은 npm run build를 실행시키는거임. 글고 deploy 먼저 호출하면 predeploy는 자동적으로 실행됨.)

4. 내용 업데이트했으면 `npm run deploy` 로 재배포해야됨.
***
추후 netlify로도 배포 할거임 
