import './App.css';
import Customer from './component/Customer';

const customers = [
  {
  'id' : '1',
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '홍길동',
  'birthday' : '710119',
  'gender' : '남자',
  'job' : '프로그래머'
  },
  {
  'id' : '2',
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '홍길동',
  'birthday' : '710119',
  'gender' : '남자',
  'job' : '프로그래머'
  },
  {
  'id' : '3',
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '홍길동',
  'birthday' : '710119',
  'gender' : '남자',
  'job' : '프로그래머'
  },
]

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return(
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          )
        })
      }


    </div>
  );
}

export default App;
