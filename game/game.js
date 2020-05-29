// 创建画布
const canvas = wx.createCanvas();
const ctx = canvas.getContext("2d");//上下文2d声明

// 获取屏幕宽高
const { windowWidth, windowHeight } = wx.getSystemInfoSync();//系统信息

// 全局变量
let fps = null;//定时器
let flivverlog = 0;//计算
var bynums = 0; //背景定时

// 用于存放子弹数组
let bulletArr = new Array();

// 用于存放敌机数组
let enemyArr = new Array();

let hero = { x: windowWidth / 2 - 50, y: windowHeight - 80, w: 100, h: 80 };

let enemyImg = newImg("./images/enemy.png");    //敌机图片
let heroImg = newImg("./images/hero.png");      //自己飞机图片

let bg = newImg("./images/bg.jpg"); //背景图片

let bulletImg = newImg("./images/bullet.png"); //子弹图片

// 敌机爆炸图片
let boo = newImg("./images/explosion13.png");
let boo2 = newImg("./images/explosion19.png");



// 更新每一页画布
function Update() {

  // 设置背景
  setBg();

  // 自己飞机
  setHero();

  // 敌机飞机
  setEnemy();

  // 设置子弹与碰撞规则
  setbullet();

  // 子弹
  // console.log(bulletArr);
  // console.log(enemyArr);


}

// 敌机对象 -- 构造函数
function flivverObj(hp, width, height, img, sudu) {
  // 随机生成x轴坐标
  this.x = parseInt(Math.random() * windowWidth + 10);
  this.y = 0;
  // 血量
  this.hp = hp;
  // 挨打
  this.hit = 0;
  // 死亡
  this.over = 0;

  this.width = width;
  this.height = height;
  this.img = img;
  // 速度
  this.sudu = sudu;
}

// 设置飞机速度 y轴移动数独
function getsudu() {
  var number = parseInt(Math.random() * 10);
  if (number < 5 && number > 0) {
    return number;
  }
  return 2;
}

// 获取飞机
function getflivver(type) {
  switch (type) {
    case 1:  //小飞机
      return new flivverObj(100, 50, 30, enemyImg, getsudu());
      break;
    case 2:  //中飞机
      return new flivverObj(500, 100, 80, enemyImg, getsudu());
      break;
    case 3:  //大飞机
      return new flivverObj(1000, 150, 130, enemyImg, getsudu());
      break;
  }
}

// 调用敌机方法
function setEnemy() {
  flivverlog++;

  // 生成敌机对象同时添加数组中
  if (bynums % 33 == 0) {
    if (flivverlog % 6 == 0) {
      enemyArr.push(getflivver(2));
    } else if (flivverlog % 13 == 0) {
      enemyArr.push(getflivver(3));
    } else {
      enemyArr.push(getflivver(1));
    }
  }

  // 绘制飞机 数组循环
  for (let a in enemyArr) {

    // 判断飞机超出底部位置，移除对象
    if (enemyArr[a].y > windowHeight) {
      enemyArr.splice(a, 1);
      continue;
    }

    // 修改y轴, 达到向下移动效果
    enemyArr[a].y += enemyArr[a].sudu;

    // 绘制敌机
    ctx.drawImage(enemyArr[a].img, enemyArr[a].x, enemyArr[a].y, enemyArr[a].width, enemyArr[a].height);

    // 判断自己飞机死亡
    if (enemyArr[a].over > 0) {  //40
      // 添加死亡效果
      enemyArr[a].over--;
      // 敌机死亡效果
      // 一开始爆炸效果
      if (enemyArr[a].over > 20) {
        ctx.drawImage(
          boo,
          enemyArr[a].x + enemyArr[a].width / 2 - 20,
          enemyArr[a].y + enemyArr[a].height / 2 - 20,
          40,
          40
        )
        // 二阶段爆炸效果
      } else if (enemyArr[a].over > 2) {
        ctx.drawImage(
          boo2,
          enemyArr[a].x + enemyArr[a].width / 2 - 20,
          enemyArr[a].y + enemyArr[a].height / 2 - 20,
          40,
          40
        )
        // 结束效果
      } else {
        enemyArr.splice(a, 1);//移除飞机
      }

    } else {
      // 判断我方飞机是否结束游戏
      if (
        (hero.x + hero.w / 2) > enemyArr[a].x - enemyArr[a].width / 2 &&
        (hero.x) < (enemyArr[a].x + enemyArr[a].width) &&
        hero.y > enemyArr[a].y &&
        hero.y < (enemyArr[a].y + enemyArr[a].height)

      ) {
        gameover();
      }
    }
  }
}

// 子弹对象
function BulletObj(x, y) {
  this.x = x;
  this.y = y;
}

// 子弹绘制与子弹碰撞
function setbullet() {
  // 子弹对象添加数组中
  if (bynums % 5 == 0) {
    bulletArr.push(new BulletObj(hero.x + 50 - 3, hero.y));
  }

  // 循环子弹数组
  for (let b in bulletArr) {

    // 判断子弹是否超出可视范围，顶部位置，如果超出删除数组
    if (bulletArr[b].y < 0) {
      // bulletArr.splice(b,1);//删除敌机方式
      continue; //只跳出此次循环
    }


    // 子弹移动
    bulletArr[b].y -= 30;
    // 绘制子弹
    ctx.drawImage(bulletImg, bulletArr[b].x, bulletArr[b].y, 10, 20); //子弹


    // 1.循环敌机数组
    for (let j in enemyArr) {

      // 5.敌机血量负值飞机消失
      if (enemyArr[j].over > 0) {
        enemyArr.splice(j, 1);
        continue; //结束当前循环
      }

      // 2.判断敌机是否碰撞
      if (
        bulletArr[b].x > enemyArr[j].x && //子弹x轴 大于 飞机x轴
        bulletArr[b].x < enemyArr[j].x + enemyArr[j].width && //子弹x轴 小于 飞机x轴 加 飞机宽度
        bulletArr[b].y > enemyArr[j].y && //子弹y轴 大于 飞机y轴 
        bulletArr[b].y < enemyArr[j].y + enemyArr[j].height //子弹y轴 小于 飞机y轴 加 飞机高度
      ) {

        // 3.计算敌机血量
        if (enemyArr[j].hp > 1) {
          enemyArr[j].hp -= 80; //减去血量
        } else {
          enemyArr[j].over = 40;//状态结束
        }

        // 4.如果子弹碰撞飞机消失
        bulletArr.splice(b, 1);
        break;//结束飞机循环


      }
    }
  }

}

// 自己飞机
function setHero() {
  ctx.drawImage(heroImg, hero.x, hero.y, hero.w, hero.h); //自己飞机
}

// 绘制背景图片 背景移动
function setBg() {
  bynums++;
  if (bynums == windowHeight) {
    bynums = 0;
  }

  ctx.drawImage(bg, 0, bynums, windowWidth, windowHeight);
  ctx.drawImage(bg, 0, bynums - windowHeight, windowWidth, windowHeight); //背景图片
}

// 定时器
fps = setInterval(Update, 10)


// 实例化图片对象
function newImg(src) {
  const image = wx.createImage();
  image.src = src;
  return image;
}

// 屏幕触发事件
wx.onTouchMove(function (e) {
  let { clientX, clientY } = e.changedTouches[0];
  hero.x = clientX - 50;
  hero.y = clientY - 40;
})


// 游戏结束
function gameover() {
  clearInterval(fps); //清除定时器
  wx.showToast({
    title: '游戏结束',
    icon: 'success',
    // duration: 2000
  })
}