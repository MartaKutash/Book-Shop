const dateInput = document.getElementById("delivery-date")
const tomorrow = new Date(new Date().getTime() + 86400000)
const YYYY = tomorrow.getFullYear()
const month = tomorrow.getMonth() + 1 // + 1 'cause month in range of 0..11
const MM = month > 9 ? "" + month : "0" + month
const day = tomorrow.getDate()
const DD = day > 9 ? "" + day : "0" + day // add 0 if day is less than ten to avoid 2022-11-1 case
const tomorrowString = `${YYYY}-${MM}-${DD}`
dateInput.setAttribute("min", tomorrowString)

