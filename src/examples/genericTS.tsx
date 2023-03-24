const GenericExamples = () => {
  function identity<Type>(arg: Type) {
    return arg;
  }

  const a = 5;
  const b = identity(a);

  const aa = 'inga';
  const bb = identity(aa);

  const aaa = { name: 'Inga' };
  const bbb = identity(aaa);
  return <div> hello</div>;
};

export default GenericExamples;
