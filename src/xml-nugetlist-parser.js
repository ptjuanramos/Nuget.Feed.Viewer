import convert  from 'xml-js';

export const parseToList = (rawXml) => {
    
    try{
        let result = convert.xml2json(rawXml) 
        return result ? JSON.parse(result) : []; 
    }
    catch (e) {
        console.log(e)
        return [];
    }
    
}