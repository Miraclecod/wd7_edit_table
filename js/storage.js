
function initTable() {
  // считать список студентов, лио из localStorage, либо из dataStub
  loadDataFromStorage();

  // получить доступ к табличке
  var table = document.getElementById('usersList');
  // получить доступ к tbody внутри таблицы, чтобы потом туда вставлять <tr>
  var tbody = table.querySelector('tbody');

  STATE.data.forEach(function (item) {
    var newTR = document.createElement('tr');
    tbody.appendChild(newTR);

    newTR.innerHTML = '<td></td><td></td><td></td><td></td><td></td><td></td>';
    insertInfoToTr(item, newTR);
  });

}

function loadDataFromStorage() {

  var dataFromStorage = localStorage.getItem('studentsList');

  var objectData = null;

  try {
    objectData = JSON.parse(dataFromStorage);
  } catch (e) {
    console.log("Не удалось загрузить данные из Storage (invalid data)", e);
  }

  if (Array.isArray(objectData) && objectData.length) {
    STATE.data = objectData;
    console.log("Загружены данные из Storage");
  } else {
    STATE.data = dataStub;
    console.log("Загружены данные из dataStub");
  }
}

function updateDataToStorage() {
  var textData = JSON.stringify(STATE.data);
  localStorage.setItem('studentsList', textData);
}