import './App.css';
import Customer from './component/Customer';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'



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
  }
]

function App() {
  

  
  return (

    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
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
        </TableBody>
      </Table>
    </Paper>
  );
}

export default App;
