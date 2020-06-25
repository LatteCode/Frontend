# Frontend

![GitHub top language](https://img.shields.io/github/languages/top/lattecode/frontend)
![GitHub](https://img.shields.io/github/license/LatteCode/Frontend)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/LatteCode/Frontend.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/LatteCode/Frontend/context:javascript)
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
See below for example with pictures.    

1. When you first enter the site, you would see this page. Just press any key.    
![Start](https://user-images.githubusercontent.com/50573908/85656851-3c64d680-b6ec-11ea-833b-bf7b7f8425a1.png)   
2. This is the menu after the first page.    
![Menu](https://user-images.githubusercontent.com/50573908/85656863-4090f400-b6ec-11ea-8fe3-3a729c453909.png)   
You could see colleges and departments(교내 기관 안내), and nearby places(학교 주변).    
Or you could get information of school bus schedule.   
**Bus Schedule in Menu is another project. Please check [here](https://github.com/BusHanyang/shuttle_PWA).**      
3. When you click nearby places, you would be here.    
![Nearby](https://user-images.githubusercontent.com/50573908/85656880-4555a800-b6ec-11ea-9aa9-7c20fb056181.png)     
    1. If you click 카페(cafe), for example, you would be here.   
    ![cafe](https://user-images.githubusercontent.com/50573908/85676059-36c5bb80-b701-11ea-8c5d-f3021018061d.png)   
        1. And this is a page of 카페 윈드밀(Cafe Windmill).   
        ![cafe_windmill](https://user-images.githubusercontent.com/50573908/85676142-4ba24f00-b701-11ea-9039-94b60aa6c381.png)    
4. When you click colleges and departments, you would be here.    
![College](https://user-images.githubusercontent.com/50573908/85656873-42f34e00-b6ec-11ea-8361-841743c38402.png)      
    1. If you click 공학대학(College of Engineering), for example, you would be here.   
    ![engineering](https://user-images.githubusercontent.com/50573908/85676376-82786500-b701-11ea-9f1c-842c84494b87.png)   
        1. And this is a page of 기계공학(Mechanical Engineering).   
        ![machine](https://user-images.githubusercontent.com/50573908/85676447-91f7ae00-b701-11ea-8a06-8fee3cd069a1.png)   

## For Developer
### Environment
1. yarn >1.22
2. node >12.0
3. vue >2.6.11 / vue-cli >4.3.1

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
### Requirements
Most of our dependencies will be installed automatically while initialing with `yarn install` command.
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
Current depth is 4. Please check [How to Use](#how-to-use)   

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
We have specific PR template. You should fill in all lines of the template.
If you didn't follow our contribution rule, your PR or Issue will be rejected.

## Disclaimer

### License
* [MIT](https://github.com/LatteCode/Frontend/blob/master/LICENSE)

### Contributors
* Code
    1. Seokmin Hong([hsmint](https://hsmint.github.io))   
    2. Jinwoong Ryu([krumaska](https://krumaska.github.io))   
    3. Yeonggyun Kim([CXZ7720](https://github.com/CXZ7720))

* Extra
    1. Jeonghyeop Lim([AntsThatWander](https://antsthatwander.github.io)) - README, assets

### Link to Backend
* Go to [Backend](https://github.com/LatteCode/Backend)



