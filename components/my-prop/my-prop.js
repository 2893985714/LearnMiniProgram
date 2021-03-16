// components/my-prop/my-prop.js
Component({

  // 给自定义组件传递数据
  properties: {

    //方式1
    // title: String,

    //方式2
    title: {
      type:String,
      value: '默认标题',
      observer: function(newVal, oldVal){
        console.log(newVal,oldVal)
      }
    }
  },
  //传递样式
  externalClasses:['titleclass']
})