App({

//生命周期函数:在后台存活两小时
//小程序初始化完成时，会执行的生命周期函数
  onLaunch: function (options) {
    console.log('我是小程序初始化完成：onLaunch')
    //1、判断小程序的进入场景
    console.log(options)
    // switch(options.scene){
    //   case 1001:
    //     break;
    //   case 1005:
    //     break;
    //     }

     //2、获取用户信息
     
     //1、获取用户信息方式
    wx.getUserInfo({
      success: function(res){
        console.log(res)
      }
    })
    // 创作一个异常错误
    // setTimeout(function(){
    //   const err = new Error()
    //   throw err
    // }, 2000)
  },
// 小程序界面显示出来时
  onShow: function (options) {
    console.log('界面显示出来：onShow')
  },
//小程序隐藏时
  onHide: function () {
    console.log('界面被影藏时会执行：onHide')
  },
//小程序产生一些错误
  onError: function (msg) {
    console.log('小程序中发生了一个错误')
  },
  //注册一个全局数据
  globalData:{
    name:'少华',
    age:18
  }
})
