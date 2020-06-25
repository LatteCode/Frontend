Frontend
![GitHub top language](https://img.shields.io/github/languages/top/lattecode/frontend)
![GitHub](https://img.shields.io/github/license/LatteCode/Frontend)
=======================================================================================

This is a frontend of our project by team [LatteCode](https://github.com/LatteCode).   
You could find the information, phone numbers, and positions of colleges, departments and nearby places of Hanyang University Erica.      

## Table of Contents
1. [For User](#for-user)
    * [How to Use](#how-to-use)
2. [For Developer](#for-developer)
    * [Project Setup](#project-setup)
    * [Requirements](#requirements)
    * [How to Contribute](#how-to-contribute)
3. [Disclamier](#disclaimer)
    * [License](#license)
    * [Contributors](#contributors)
    * [Link to Backend](#link-to-backend)

## For User

### How to Use
Our homepage has a structure of below.   
Menu -> Departments -> Jobs -> Detail information.     
**Bus Schedule in Menu is another project. Please check [here](https://github.com/BusHanyang/shuttle_PWA).**   
See below for example with pictures.    

![Start](https://user-images.githubusercontent.com/50573908/85656851-3c64d680-b6ec-11ea-833b-bf7b7f8425a1.png)   
1. When you first enter the site, you would see this page. Just press any key.   
![Menu](https://user-images.githubusercontent.com/50573908/85656863-4090f400-b6ec-11ea-8fe3-3a729c453909.png)   
2. This is the menu after the first page.   
You could see colleges and departments(교내 기관 안내), and nearby places(학교 주변).   
Or you could get information of school bus schedule, click link above to find out more!   
![Nearby](https://user-images.githubusercontent.com/50573908/85656880-4555a800-b6ec-11ea-9aa9-7c20fb056181.png)   
3. When you click nearby places, you would be here.  
    ![cafe](https://user-images.githubusercontent.com/50573908/85676059-36c5bb80-b701-11ea-8c5d-f3021018061d.png)   
    1. If you click 카페(cafe), for example, you would be here.
        ![cafe_windmill](https://user-images.githubusercontent.com/50573908/85676142-4ba24f00-b701-11ea-9039-94b60aa6c381.png)   
        1. And this is a page of 카페 윈드밀(Cafe Windmill).
![College](https://user-images.githubusercontent.com/50573908/85656873-42f34e00-b6ec-11ea-8361-841743c38402.png)      
4. When you click colleges and departments, you would be here.
    ![engineering](https://user-images.githubusercontent.com/50573908/85676376-82786500-b701-11ea-9f1c-842c84494b87.png)   
    1. If you click 공학대학(College of Engineering), for example, you would be here.
        ![machine](https://user-images.githubusercontent.com/50573908/85676447-91f7ae00-b701-11ea-8a06-8fee3cd069a1.png)   
        1. And this is a page of 기계공학(Mechanical Engineering).

## For Developer

### Project Setup
* Install
```
yarn install
```
* Compiles and minifies for production
```
yarn build
```
* Lints and fixes files
```
yarn lint
```
* Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Requirements

#### Dependencies
1. axios ^0.19.2 
2. core-js ^3.6.4
3. register-service-worker ^1.7.1
4. vue ^2.6.11
5. vue-router ^3.1.6

### How to Contribute

#### Basic
##### Where to Contribute
You should modify **scr** directory, which means you could add or modify our pages.   
However, please do not change depth of pages.   
Current depth is 4(Menu -> College / Departments / Outer places -> )   

##### Add a page
* [Views](https://github.com/LatteCode/Frontend/tree/master/src/views)
First, you should use views, which is a page frame.   
If what you want to add is in views, you would use it.   
Otherwise, you could add views, but it must be in depth of pages. 

* [Index](https://github.com/LatteCode/Frontend/tree/master/src/router)
If you use existing views, you would not get in here.   
Otherwise, you should add new routes in here.

* [Components](https://github.com/LatteCode/Frontend/tree/master/src/components)
Using existing components is recommended, but adding new components is not prohobitted.

* [Assets](https://github.com/LatteCode/Frontend/tree/master/src/assets)   
When you add a page, you should use any picture.    
In this case, you could do this by upload picture in assets directory.

#### Pull Request
You should follow the form below.

##### 개요(outline)
이번 PR은 ~~~의 문제를 해결합니다.   
(This PR is for solving problem of ~~~)

##### 작업사항(Work)
* 파일명1 : 세부수정사항1   
* 파일명2 : 세부수정사항2
(File name 1 : modification detail 1)   
(File name 2 : modification detail 2)

##### 변경로직
로직 A가 디바이스@에서 렌더링 문제가 생기는 것을 B로 바꾸어 해결함   
(Solve rendering problem in device @ by change logic A into logic B)

##### 변경전
핵심 코드 스니펫 또는 캡쳐사진(Files change view 활용)   
(main code snippets or capture-using files change view)

##### 변경후
핵심 코드 스니펫 또는 캡쳐사진(Files change view 활용)   
(main code snippets or capture-using files change view)

###### 기타(Etc.)
* 기타 참고사항(Etc.)

## Disclaimer

### License
* [MIT](https://github.com/AntsThatWander/Frontend/blob/master/LICENSE)

### Contributors
* Code
    1. Seokmin Hong([hsmint](https://hsmint.github.io))   
    2. Jinwoong Ryu([krumaska](https://krumaska.github.io))   
    3. Yeonggyun Kim([CXZ7720](https://zerogyun.dev))

* Extra
    1. Jeonghyeop Lim([AntsThatWander](https://antsthatwander.github.io)) - README, assets

### Link to Backend
* Go to [Backend](https://github.com/LatteCode/Backend)



