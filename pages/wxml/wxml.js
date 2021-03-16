// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:'你好华少',
    firstname:'唐僧',
    lastaname:'孙悟空',
    age:21,
    newTime:new Date().toLocaleString(),
    isActive:false,
    isShow:true,
    score:50,
    arr:['孙悟空','猪八戒','唐僧'],
    nums:[
      [1,2,3,4],
      [10,20,30,40],
      [100,200,300,400]
    ],
    letters:['a','b','c']
  },
  //文字颜色切换
  handleSwitchColor(){
    this.setData({
      isActive: !this.data.isActive
    })
  },
 //切换显示隐藏文字
 handleSwitchShow(){
   this.setData({
      isShow: !this.data.isShow
   })
 },
 //分数增加
 handleIncrement(){
   this.setData({
     score: this.data.score +10
   })
 },
  onLoad(){
    setInterval(() => {
      this.setData({
        newTime:new Date().toLocaleString()
      })
    }, 1000);
  }
})