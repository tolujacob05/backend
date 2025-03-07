const fs = require('fs');
const superagent = require('superagent');

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) return reject('File couldnt be found 🥴');
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject('Oops file could not be found');
      resolve('success');
    });
  });
};

// ASYNC / AWAIT
const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);

    const res = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    console.log(res);

    await writeFilePro('dog-img.txt', res.body.message);
    console.log('Random dog image saved to file successfully');
  } catch (err) {
    console.log(err);
  }
};

// getDogPic();

/*
fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
    console.log(`Breed: ${data}`);
  
  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .end((err, res) => {
      if (err) return console.log(err.message);

      console.log(res.body.message);

      fs.writeFile('dog-img.txt', res.body.message, (err, res) => {
        console.log('Random dog image saved to file successfully');
      });
    });


      // fs.writeFile('dog-img.txt', res.body.message, (err, res) => {
    //   if (err) return console.log(err.message);
    //   console.log('Random dog image saved to file successfully');
    // });
    
});
*/

/*
// PROMISE
readFilePro(`${__dirname}/dog.txt`)
  .then((data) => {
    console.log(`Breed: ${data}`);
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then((res) => {
    console.log(res.body.message);
    return writeFilePro('dog-img.txt', res.body.message);
  })
  .then(() => {
    console.log('Random dog image saved to file successfully');
  })
  .catch((err) => {
    console.log(err.message);
  });
*/
