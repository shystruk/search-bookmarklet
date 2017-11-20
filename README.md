Search Bookmarklet
================================
What is that Bookmarklet in JavaScript ? <br/>
[Bookmarklet](http://en.wikipedia.org/wiki/Bookmarklet) - is a bookmark stored in a web browser that contains JavaScript commands to extend the browser's functionality.


First time when I've seen this I was very excited. What it that, JavaScript in **href** attribute?<br/>

What you should know it is how to write a bookmarklet on **html** tags:<br/>

key word is `**javascript:**`<br/>

1. An anonymous function:
```javascript
javascript:(function () {
  // code...
})();
```
For example:
```html
<a href="javascript:(function () { alert('Hello world!') })();">Alert</a>
```
2. If script includes a function definition/redefinition, you should add suffixed **void(...);**
```javascript
javascript:{ script );void(0);
```

#### What functionality "Search Bookmarklet" has:
- you may select any text on page and you should see button "Search". When you click on "Search" you will go to another page where your text will open in **google/search**.

> Code you may see in **index.html** or **bookmarklet.js** files.

From **bookmarklet.js** file you may copy code and create **BOOKMARKS** in any browser what you want.<br/>

#### For ex. Google Chrome steps:
- Click Bookmarks->Bookmark Manager;
- Click the "Organize" link, then "Add Page" in the drop down;
- You should see two input fields. Type the name of the bookmark .Paste the javascript code below into the second field.

After that you may use it.

Information
============
If you have some questions, improvements for this bookmarklet create an issue or pull request.<br/>
Thank you!

License
========
[MIT License](http://opensource.org/licenses/mit-license.php)
