function getHTML(pageID) {
  var xhttp = New XMLHttpRequest;
  xhttp.open("GET", pageID + ".html", true);
  xhttp.send();
  return xhttp.response;
}
