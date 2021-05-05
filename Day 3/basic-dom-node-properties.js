// task 1
for (let li of document.querySelectorAll('li')) {
      let title = li.firstChild.data;
      title = title.trim();
      let count = li.getElementsByTagName('li').length;
      alert(title + ': ' + count);
}

// task 2
/*
<html>

<body>
  <script>
    alert(document.body.lastChild.nodeType);  // выведет 1
  </script>
</body>
</html>

*/

// task 3
/*
<script>
  let body = document.body;

  body.innerHTML = "<!--" + body.tagName + "-->";

  alert( body.firstChild.data ); // тег body меняется на комментарий <!-- BODY --> , data от комментария равна значению комментария т.е BODY 
</script>
*/

// task 4
/*
Объектом какого класса является document?

Какое место он занимает в DOM-иерархии?

Наследует ли он от Node или от Element, или может от HTMLElement?

Node -> Document -> HTMLDocument
*/
