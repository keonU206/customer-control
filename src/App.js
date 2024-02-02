import "./App.css";
import Customer from "./components/Customer";

function App() {
  const customers = [
    {
      id: "1",
      image: "https://placeimg.com/64/64/1",
      name: "홍길동",
      birthday: "010206",
      gender: "남자",
      job: "대학생",
    },
    {
      id: "2",
      image: "https://placeimg.com/64/64/2",
      name: "이순신",
      birthday: "7810125",
      gender: "남자",
      job: "회사원",
    },
    {
      id: "3",
      image: "https://placeimg.com/64/64/3",
      name: "신사임당",
      birthday: "880818",
      gender: "여자",
      job: "주부",
    },
  ];
  return (
    <div className="gray-background">
      {customers.map((customer) => (
        // map 함수 내에서 반환값을 정상적으로 작성
        <Customer key={customer.id} {...customer} />
      ))}
    </div>
  );
}

export default App;
