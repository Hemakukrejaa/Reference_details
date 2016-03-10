
Template.messages.helpers({
messages: function()
{
        return Messages.find();

}
});

Template.messages1.helpers({
messages1: function()
{
        return Messages1.find();

}
});

Template.messages2.helpers({
messages2: function()
{
        return Messages2.find();

}
});

Template.messages3.helpers({
messages3: function()
{
        return Messages3.find();

}
});

Template.messages4.helpers({
messages4: function()
{
        return Messages4.find();

}
});


Template.messages5.helpers({
messages5: function()
{
        return Messages5.find();

}
});

Template.messages6.helpers({
messages6: function()
{
        return Messages6.find();

}
});


Template.input.events = {
  "click input[type=submit]": function (e) {
    if ($(e.target).prop("id")=="b1") { 
      
      var message = document.getElementById('message');
	var message1 = document.getElementById('message1');
	
	var message2 = document.getElementById('message2');
       var message3 = document.getElementById('message3');

  
      if (message.value != '') {
        Messages.insert({
         
          message: message.value,
         
        });

   
	
         }
if (message1.value != '') {
        Messages1.insert({
         
          message1: message1.value,
         
        });
   
}

if (message2.value != '') {
        Messages2.insert({
         
          message2: message2.value,
         
        });
   
}


if (message3.value != '') {
        Messages3.insert({
         
          message3: message3.value,
         
        });

   
}

}

}}



Template.input1.events = {
    
  'click #b11' : function () {

var message4 = document.getElementById('message4');

var message5 = document.getElementById('message5');

var message6 = document.getElementById('message6');


if (message4.value != '') {
        Messages4.insert({
         
          message4: message4.value,
         
        });

   
}
if (message5.value != '') {
        Messages5.insert({
         
          message5: message5.value,
         
        });

   
}
if (message6.value != '') {
        Messages6.insert({
         
          message6: message6.value,
         
        });

   
}

}}









