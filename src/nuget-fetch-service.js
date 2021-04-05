import XMLParser from 'react-xml-parser';
import axios from 'axios';


/*
 For now I don'tuse this service. It's hard to overlap the cors situation from a nuget.server
*/
// export const getNugetPackageXml = async (url) => {
//     let res = fetch(url, {
//         mode:'no-cors',
//         method: "GET"
//     }).then(response => response.text())
//     .then((response) => {
//        console.log(response);
//     }).catch((err) => {
//         console.log('fetch', err)
//     });

//     let responseAsText = "";

//     let xmlParser = new XMLParser();
//     return []; 
// }