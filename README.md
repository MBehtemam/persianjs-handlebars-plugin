persianjs-handlebars-plugin
===========================

Persianjs HandleBars Plugin

##How to use
incluede 'persianjs-handlebarsjs-plugin.js' after 'persian.js' and 'Handlebars.js'

###Functions

###1) Convert to Persian characters
----------
Used for converting Arabic characters to Persian.

Example:

```javascript
{{arabicChar 'علی'}} //returns: علی
````
###2) Convert to Persian numbers from Arabic Number
----------
Used for converting Arabic numbers to Persian.

Example:

```javascript
{{arabicNumber "٣٤٥"}} //returns: ۳۴۵
````

###3) Convert to Persian numbers from English Number
----------
Used for converting English numbers to Persian.

Example:

```javascript
{{englishNumber "345"}} //returns: ۳۴۵
````

###4)Using all function in one function

You can use all of the functions together with one PersianJs Handlebars Plugin 

Example:

```javascript

{{toPersian "علي٤2465"}} //returns: علی۴۲۴۶۵
````
