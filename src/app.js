import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component(`g-button`,Button);
Vue.component(`g-icon`,Icon);
Vue.component(`g-button-group`,ButtonGroup);
new Vue({
    el:'#app',
    data:{
        loading1:false
    }

})
import chai from 'chai'
const expect = chai.expect

//单元测试
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {icon:'setting'}
    })
    button.$mount('#test')
    let useElement = button.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-setting')
    button.$el.remove()
    button.$destroy()

}
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {icon:'setting',
            loading: true,
        }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading2')
    button.$el.remove()
    button.$destroy()

}
{
    const div = document.createElement("div")
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {icon:'setting',
            loading: true,
        }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    let order = window.getComputedStyle(svg).order
    expect(order).to.eq('1')
    button.$el.remove()
    button.$destroy()

}
// {
//     const Constructor = Vue.extend(Button)
//     const gButton = new Constructor({
//         propsData: {icon:'setting'}
//     })
//     gButton.$mount()
//
//     button.$el.remove()
//     button.$destroy()
//
// }