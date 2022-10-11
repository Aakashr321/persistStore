export const debounceHandler = function (funct, delayTime = 300) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);

    timer = setTimeout(() => {
      funct.apply(context, args);
    }, delayTime);
  };
};
