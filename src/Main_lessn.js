import axios from "axios";
import React , {useState} from 'react';
import { SafeAreaView, View, Text, Button, FlatList } from 'react-native';

const Main = (props) => {
    const [userData, setUserData] = useState([]);
    
    const fetchData_Then = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(({data}) => {                // {data} == response.data
                console.log(data);
                setUserData(data);
            })
    }
    
    const fetchData_Await = async () => {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUserData(data);
    }

    return (
        <SafeAreaView>
            <View>
                <Button title="Fetch Data With Then" onPress={fetchData_Then} />
                <Button title="Fetch Data With Await" onPress={fetchData_Await} />

                <FlatList 
                    data={userData}
                    renderItem={({item}) => <Text>{item.name}</Text>}                
                />
            </View>
        </SafeAreaView>
    );
}

export default Main;


// LESSON DESCRIPTIONS

// const fetchData_Then1 = () => {
//     console.log("starting fetch with then..")

//     axios.get("https://jsonplaceholder.typicode.com/users")
//         .then((response) => {
//             console.log(response)
//         })
//         .catch(error => {
//             console.log(error) 
//         })

//     console.log("end data with then ..");
// }

// const fetchData_Await1 = async () => {
//     console.log("starting fetch with await..")

//     const response = await axios.get("https://jsonplaceholder.typicode.com/users");
//         console.log(response);
                
//     console.log("end data with await..");

// }


// <Button title="Number" onPress={checkNumber} />
// function promiseFunction(number) {
//     return new Promise((resolve, reject) => {
//         if (number > 5) {
//             resolve("Sayı beşten büyük!");
//         }
//         else {
//             reject("Sayı beşten küçük..");
//         }
//     })
// }

// const checkNumber = () => {
//     promiseFunction(1)
//         .then(response => {
//             console.log("response: ");
//             console.log(response);
//         })
//         .catch(error => {
//             console.log("error: ");
//             console.log(error);
//         })
// }