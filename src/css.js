const string = `
/*你好，我叫小黄，现在我来演示一下画哆啦A梦**/
/*给背景加点颜色*/
 body{
    width: 100%;
    height: 100%;
    background: #fc3;
  }
  /*定义一下头的位置*/
  .head {
    border: 2px solid #000;
    width: 384px;
    height: 358px;
    border-radius: 50%;
    position: absolute;
    left: 63px;
    top: 20px;
    overflow: hidden;
    background-color: #0097e3;
    z-index: 3;
  }
  /*让我们来给他加上大大的眼睛*/
  .eye {
    background-color: #fff;
    border-radius: 50%;
    border: 2px solid #000;
    position: absolute;
    overflow: hidden;
    z-index: 3;
    width: 100%;
    height: 100%;
  }
  /*添加纯黑色的眼珠子*/
  .pupil {
    position: absolute;
    width: 25px;
    height: 35px;
    background-color: #000;
    border-radius: 50%;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    bottom: 0;
  }
  .pupil::after {
    width: 7px;
    height: 14px;
    background-color: #fff;
    border-radius: 50%;
  }
  /*红红的鼻子*/
  .nose {
    border: 2px solid #000;
    width: 58px;
    height: 58px;
    background-color: #e40224;
    top: 123px;
    border-radius: 50%;
  }
  /*鼻子高光*/
  .nose::after {
    background-color: #fff;
    border-radius: 50%;
    width: 22px;
    height: 22px;
    left: 11px;
    top: 11px;
  }
  /*加上两边的胡须*/
  .mustache-list li {
    width: 90px;
    height: 5px;
    background-color: #000;
  }
  
  .mouth {
    border: 2px solid #000;
    width: 340px;
    height: 280px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    left: 7px;
    top: 85px;
    z-index: 1;
    overflow: hidden;
    -webkit-transform: rotate(5deg);
  }
  /*鼻子下线条*/
  .philtrum {
    border: 2px solid #000;
    position: absolute;
    min-height: 150px;
    min-width: 50px;
    border-radius: 50px;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    left: 126px;
    top: 60px;
    z-index: 5;
  }
  .lips{
      border: 2px solid #000;
      width: 285px;
      height: 200px;
      border-radius: 50%;
      margin-left:5px;
      position: relative;
      z-index: 3;
      -webkit-transform: rotate(-10deg);
  }
  .lips::before{
      display: block;
      content: '';
      width: 305px;
      height: 105px;
      background-color: #fff;
      position: absolute;
      left: -2px;
  }
  /*嘴巴线条完善*/
  .dimple{
      border: 2px solid #000;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      position: absolute;
      z-index: 6;
      top: 105px;
      left: 9px;
      border-right-color: transparent;
      border-bottom-color: transparent;
      -webkit-transform: rotate(10deg);
  }
  /*围脖*/
  .necklace{
      border: 2px solid #000;
      width: 255px;
      height: 80px;
      background-color: #d9011a;
      border-radius: 50%;
      position: absolute;
      left: 123px;
      top: 305px;
      -webkit-transform: rotate(2deg);
      z-index: 2;
  }
  /*铃铛*/
  .drop{
      border: 2px solid #000;
      width: 55px;
      height: 55px;
      background-color: #f5cc07;
      border-radius: 50%;
      position: absolute;
      top: 68px;
      left: 50px;
      overflow: hidden;
  }
  /*铃铛孔*/
  .drop::before{
      border: 2px solid #000;
      display: block;
      content: '';
      position: absolute;
      width: 17px;
      height: 8px;
      border-radius: 50%;
      background-color: #665a4c;
      left: 0.5em;
      top: 25px;
      z-index: 3;
  }
  /*铃铛裂缝*/
  .drop::after{
      border: 2px solid #000;
      display: block;
      content: '';
      border-radius: 50%;
      border-top-color: transparent;
      border-bottom-color: transparent;
      border-right-color: transparent;
      min-width: 35px;
      min-height: 35px;
      position: absolute;
      bottom: -4px;
      left: 15px;
      -webkit-transform: rotate(-17deg);
  }
  .drop-line {
      border: 2px solid #000;
      position: absolute;
      left: -140%;
      top: 10px;
      min-width: 170px;
      min-height: 170px;
      border-radius: 50%;
      border-left-color: transparent;
      border-bottom-color: transparent;
      border-right-color: transparent;
  }
  .drop-line:nth-of-type(2){
      top: 18px;
  }
  .body{
      width: 250px;
      height: 280px;
      position: absolute;
      left: 120px;
      top: 255px;
      z-index: 1;
  }
  /*身体*/
  .trunk {
      border: 2px solid #000;
      border-radius: 50%;
      width: 100%;
      height: 100%;
      position: relative;
      background-color: #0097e3;
      border-right-color: transparent;
      border-bottom-color: transparent;
  }
  /*肚子 */
  .stomach{
      border: 2px solid #000;
      width: 175px;
      height: 145px;
      position: absolute;
      background-color: #fff;
      border-radius: 50%;
      left: 10px;
      top: 95px;
      -webkit-transform: rotate(15deg);
      overflow: hidden;
      z-index: 1;
  }
  /*口袋*/
  .pocket{
      border: 2px solid #000;
      position: absolute;
      width: 90%;
      height: 90%;
      border-radius: 50%;
      top: 0.5em;
      left: 0.5em;
  }
  .pocket::after{
      border: 2px solid #000;
      content: '';
      position: absolute;
      left: -25px;
      top: -10px;
      display: inline-block;
      min-width: 169px;
      -webkit-transform: rotate(-10deg);
      min-height: 65px;
      padding: 0.5em;
      border-radius: 50%;
      border-right-color: transparent;
      border-top-color: transparent;
      border-left-color: transparent;
      background-color: #fff;
  }
  .arm{
      background-color: #0097e3;
  }
  .hand{
      border: 2px solid #000;
      display: block;
      content: '';
      width: 70px;
      height: 70px;
      background-color: #fff;
      border-radius: 50%;
      position: absolute;
      z-index: -1;
      top: 175px;
      left: 270px;
  }
  .arm.right::before{
      display: block;
      content: '';
      width: 50px;
      height: 55px;
      background-color: #0097e3;
      position: absolute;
      top:0;
      left: -10px;
      z-index: 3;
      -webkit-transform: rotate(30deg);
  }
  .arm.right::after{
      border: 2px solid #000;
      display: block;
      content: '';
      width: 40px;
      height: 95px;
      background-color: #0097e3;
      border-radius: 50%;
      border-top-color: transparent;
      border-right-color: transparent;
      border-bottom-color: transparent;
      -webkit-transform: rotate(-7deg);
      position: absolute;
      top: 6px;
      left: -12px;
  }
  .arm.right{
      border: 2px solid #000;
      position: absolute;
      width: 70px;
      height: 120px;
      border-radius: 40%;
      right: -55px;
      background-color: #0097e3;
      top: 90px;
      -webkit-transform: rotate(-30deg);
      z-index: 1;
  }
  .arm.left {
      border: 2px solid #000;
      position: absolute;
      border-radius: 50%;
      width: 45px;
      height: 65px;
      top: 85px;
      left: -15px;
      -webkit-transform: rotate(15deg);
      z-index: -1;
  }
  .trunk::before{
      display: block;
      content: '';
      width: 20px;
      height: 20px;
      background-color: #0097e3;
      position: absolute;
      top: 85px;
      left: 0;
      z-index: 3;
  }
  .trunk::after {
      display: block;
      content: '';
      width: 110px;
      height: 145px;
      background-color: #0097e3;
      position: absolute;
      top: 110px;
      left:1px;
      -webkit-transform: rotate(15deg);
    }
  .footer{
  
  }
  .leg.left{
      border: 2px solid #000;
      width: 120px;
      height: 110px;
      background-color: #0097e3;
      position: absolute;
      left: 95px;
      top: 430px;
  }
  .foot{
      border: 2px solid #000;
      width: 105px;
      height: 160px;
      background-color: #fff;
      position: absolute;
      border-radius: 50%;
      z-index: 10;
  }
  .leg.left .foot{
      -webkit-transform:rotate(-30deg);
      left: -4em;
      top: -1.5em;
  }
  .leg.right + .foot{
  -webkit-transform: rotate(-30deg);
  left: 206px;
  top: 450px;
  width: 125px;
  height: 150px;
  }
  .leg.left::before{
      border: 2px solid #000;
      display: block;
      content: '';
      width: 45px;
      height: 45px;
      border-radius: 50%;
      position: absolute;
      left: -10px;
      top: -10px;
      background-color: #0097e3;
      border-left-color: transparent;
      border-right-color: transparent;
      border-bottom-color: transparent;
  }
  .leg.left::after{
      border: 2px solid #000;
      display: block;
      content: '';
      min-width: 140px;
      min-height: 140px;
      border-radius: 50%;
      background-color: #fc3;
      position: absolute;
      top: 98px;
      left: 8px;
      border-left-color: transparent;
      border-right-color: transparent;
      border-bottom-color: transparent;
      z-index: 3;
  }
  .right-padding{
      position: absolute;
      z-index: 8;
      top: 455px;
      left: 288px;
  }
  .right-padding::before{
      border: 2px solid #000;
      display: block;
      content: '';
      width: 30px;
      height: 30px;
      background-color: #0097e3;
      border-left-color: transparent;
      border-right-color: transparent;
      border-bottom-color: transparent;
      position: absolute;
      left: 0;
      top: 0 ;
      z-index: -1;
      -webkit-transform: rotate(-15deg);
  }
  .leg.right{
      border: 2px solid #000;
      width: 75px;
      height: 160px;
      border-radius: 50%;
      background-color: #0097e3;
      position: absolute;
      left: 290px;
      top: 410px;
      -webkit-transform: rotate(20deg);
  }
`
export default string;