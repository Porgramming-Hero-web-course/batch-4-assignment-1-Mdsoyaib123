{
  // Problem-4

  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };
  type Shape = Circle | Rectangle;

  const calculateShapeArea = (param: Shape):number => {
    if (param?.shape === "circle") {
      return Math.PI * param.radius ** 2;
    } else {
      return param.width * param.height;
    }
  };


  const res= calculateShapeArea({shape:'circle',radius:5})
  console.log(res)
}
