import components from './components';

const TreeShakeLibrary = {
  install(Vue) {
    const componentKeys = Object.keys(components);

    componentKeys.forEach(componentKey => {
      const component = components[componentKey];

      Vue.component(component.name, component);
    });
  }
};

export default TreeShakeLibrary;
export {components};
