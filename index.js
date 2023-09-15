function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise data fetched');
    }, 1000);
  });
}

function processAndTransformData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const transformedData = data.toUpperCase();
      resolve(transformedData);
    }, 2000);
  });
}

function saveDataToDatabase(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Симулюємо збереження даних до бази даних
      resolve('Data saved to the database');
    }, 1500);
  });
}

fetchData()
  .then((data) => {
    console.log('Data received:', data);

    // Обробка та трансформація даних
    return processAndTransformData(data);
  })
  .then((transformedData) => {
    console.log('Transformed data:', transformedData);

    // Збереження даних до бази даних
    return saveDataToDatabase(transformedData);
  })
  .then((result) => {
    console.log(result);

    // Додаткові асинхронні операції або продовження ланцюга
  })
  .catch((error) => {
    console.error('Error:', error);
  });
