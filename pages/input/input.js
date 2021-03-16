// pages/input/input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleInput(eventinput){
    console.log('输入的内容',eventinput)
  },
  handleFocus(eventfocus){
    console.log('input获取焦点',eventfocus)
  },
  handleBlur(eventblur){
    console.log('input失去焦点',eventblur)
  }
})