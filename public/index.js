//Variables para identificar objetos dentro de la pagina
var fieldsID = "input" // Identificador de todos los campos del formulario
console.log("hol")
//Campos estaticos
var Pais = "Colombia"
var Producto = "pagina inicial"
var Estado = "Pendiente"
var Propietario = "Sin asignar"
var UrlOrigen = "www.zilonix.com"
var Tienda = "MelonSA"

//Variables sistemicas
var listenerAddSuccess = false
var jsonToSend = ""
var react2FieldsChange = true
var uniqueID = makeid(5)

// Carga para agregar el listener a los botones
function load() {
  var fields = document.querySelectorAll(fieldsID)

  if (react2FieldsChange) {
    if (fields == null) {
      console.log("Error no se pudo agregar el evento a los campos")
    } else {
      fields.forEach((campo) => {
        campo.addEventListener("change", changeOnFields, false)
      })
      console.log("campos cargados correctamente")
    }
  }
}

function changeOnFields(campos) {
  console.log("Cambio en los campos")
  var fields = document.querySelectorAll(fieldsID)
  jsonToSend = formarJson(fields)
  var JsonOBject = JSON.parse(jsonToSend)
  if (JsonOBject.Telefono == "") {
    console.log("Aun no llenan el telefono ")
  } else {
    console.log("Enviar el lead ")
    sendLead() // Enviar lead
  }
}

function formarJson(campos) {
  console.log("formarJson")
  var indice = 1
  var mapFileds = new Map()
  mapFileds = mapearIdentificadorSistemicos(mapFileds)
  mapFileds = mapearCamposEstaticos(mapFileds)
  campos.forEach((campo) => {
    switch (indice) {
      case 1:
        mapFileds.set("Telefono", campo.value)
        break
      case 2:
        mapFileds.set("Nombre", campo.value)
        break
      case 3:
        mapFileds.set("Correo", campo.value)
        break
      case 4:
        mapFileds.set("Comentario", campo.value)
        break
      case 5:
        mapFileds.set("Vacio", campo.value)
        break
      case 6:
        mapFileds.set("Vacio", campo.value)
        break
      case 7:
        mapFileds.set("Vacio", campo.value)
        break
      case 8:
        mapFileds.set("undefined", campo.value)
        break
    }
    indice += 1
  })
  indice = 1
  var jsonAEnviar = JSON.stringify(mapToObj(mapFileds))
  console.log("Json: " + jsonAEnviar)
  return jsonAEnviar
}

function mapearCamposEstaticos(mapFileds) {
  mapFileds.set("Pais", Pais)
  mapFileds.set("Producto", Producto)
  mapFileds.set("Estado", Estado)
  mapFileds.set("Propietario", Propietario)
  mapFileds.set("UrlOrigen", UrlOrigen)
  mapFileds.set("Tienda", Tienda)
  return mapFileds
}

function mapearIdentificadorSistemicos(mapFileds) {
  mapFileds.set("ID", uniqueID)
  mapFileds.set(
    "MarcaTemporal",
    new Date().toLocaleString("en-US", { timeZone: "America/Bogota" })
  )
  return mapFileds
}

// Turn the map<String, Object> to an Object so it can be converted to JSON
function mapToObj(inputMap) {
  let obj = {}
  inputMap.forEach(function (value, key) {
    obj[key] = value
  })
  return obj
}

function makeid(length) {
  var result = ""
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  var charactersLength = characters.length
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

const sendLead = function () {
  const response = fetch("https://melontiendavirtual.com/sendlead", {
    method: "POST",
    body: jsonToSend, // string or object
    headers: {
      "Content-Type": "application/json",
    },
  })
}
load()
