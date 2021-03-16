//getApp()获取App()产生的实例对象
const app = getApp()

console.log(app.globalData.name)
console.log(app.globalData.age)
const name = app.globalData.name;
const age = app.globalData.age;


Page({
  useerinfo(event){
    console.log(event)
    
  },
  
  data: {
    message:'哈哈哈',
    list:[]
  },
  //---------------1、监听页面的生命周期函数------------------
 //页面被加载出来
 onLoad(){
  console.log('onLoad')
  //网络请求
  // wx.request({
  //   url: 'http://123.207.32.32:8000/recommend',
  //   success:(res) => {
  //     console.log(res)
  //     this.setData({
  //       list:data
  //     })
  //   }
  // })
 },
 //页面显示出来
 onShow(){
   console.log('onShow')
 },
 //页面初次渲染完成时
 onReady(){
   console.log('onReady')
 },
 //当页面影藏起来时
 onHide(){
   console.log('onHide')
 },
 //当页面销毁时
 onUnload(){
  console.log('onUnload')
 },
// -------3、监听wxml中相关的一些事件-----------
hahacclick(){
  console.log('点击了哈哈哈')
},
 //--------4其他事件----------------
//监听页面的滚动事件
onPageScroll(obj){
  console.log(obj)
},
//监听页面滚动到底部
// onReachBottom(){
//   console.log('页面滚动到底部')
// },
onPullDownRefresh(){
  console.log('下拉刷新事件')
}
})