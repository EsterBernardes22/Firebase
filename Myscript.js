var rollV, nameV, genderV, addressV; //variaveis que irão receber os dados cadastrados

function readFom() {
  rollV = document.getElementById("roll").value; 
  nameV = document.getElementById("name").value;
  edadV = document.getElementById("edad").value;
  planesV = document.getElementById("planes").value;
  console.log(rollV, nameV, addressV, genderV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .set({
      rollNo: rollV,
      name: nameV,
      edad: edadV,
      planes: planesV,
    });
  alert("Dados Inseridos");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("edad").value = "";
  document.getElementById("planes").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .on("value", function (snap) {
      document.getElementById("roll").value = snap.val().rollNo;
      document.getElementById("name").value = snap.val().name;
      document.getElementById("edad").value = snap.val().edad;
      document.getElementById("planes").value = snap.val().planes;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .update({
      //   rollNo: rollV,
      name: nameV,
      edad: edadV,
      planes: planesV,
    });
  alert("Dados Atualizados");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("edad").value = "";
  document.getElementById("planes").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .remove();
  alert("Dados Excluidos");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("edad").value = "";
  document.getElementById("planes").value = "";
};