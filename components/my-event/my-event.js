// components/my-event/my-event.js
Component({
  methods: {
    // 组件内部发出事件
    handlezengjia(){
      this.triggerEvent('increment',{name:'sss',age:12},{})
    }
  }
})