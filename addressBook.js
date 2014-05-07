//Collection de contacts
var Contacts = {
   index: 1,
 
   init: function(){},

   //CRUD into the storage area
   storeAdd: function(entry) {},
   storeEdit: function(entry) {},
   storeRemove: function(entry) {},

   //CRUD into the table element
   tableAdd: function(entry){},
   tableEdit: function(entry){},
   tableRemove: function(entry){}
};

Contacts.init();