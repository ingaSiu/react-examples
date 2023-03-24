import GenericListComponent from './GenericListComponent';

type Person = { name: string; age: number };

const GenericComponentExample = () => {
  const people: Person[] = [
    { name: 'John Doe', age: 30 },
    { name: 'Jane Doe', age: 25 },
    { name: 'Bob Smith', age: 40 },
  ];
  return (
    <GenericListComponent<Person>
      items={people}
      renderItem={(person) => (
        <div>
          <div>{person.name}</div>
          <div>{person.age}</div>
        </div>
      )}
    />
  );
};

export default GenericComponentExample;
