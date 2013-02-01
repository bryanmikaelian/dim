dim
==

dim a simple jQuery plugin that makes a form button appear to be dimmed out.  It checks all the input fields of a form and sets a data attribute accordingly if their length is 0 or empty. Think of it as a poor man's validation.

See the demo for more info.

Why make this? 
==

Sometimes I am lazy and need to do a quick validation on the client side.  We do this sometimes at my current job (mainly for single input forms).


How does it work?
==

```javascript

$("#form_id").dim({button: '#button_id'});
