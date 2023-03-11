import fs from 'fs';

function getArrayBuffer(fileNameArray) {
    const arrayBuffer = fileNameArray.map((file) => {
        return fs.readFileSync(`../data/${file}`, function(err, data){
            console.log(data);
        });
    })
    return arrayBuffer;
}

export default getArrayBuffer