$(document).ready(function(e) {
  $("#add-todo").button({
	  icons:{
		primary: "ui-icon-circle-plus"  
	  } 
  }).click(function(){
	  $("#new-todo").dialog('open');
  }); //click
  ; //koniec button
  $("#new-todo").dialog({
	  modal: true,
	  autoOpen: false,
	  buttons: {
		"Dodaj zadanie": function(){
			var taskName =$('#task').val();
			if (taskName === ''){
			  return false;	
			}
			var taskHTML ='<li><span class="done">%</span>';
			taskHTML += '<span class="delete">x</span>';
			taskHTML += '<span class="task"></span></li>';
			var $newTask = $(taskHTML);
			$newTask.find('.task').text(taskName);
			$newTask.hide();
			$('#todo-list').prepend($newTask);
			$newTask.show('clip',250).effect('highlight',1000);
			$(this).dialog('close');

		},
		"Anuluj": function(){
		  $(this).dialog('close');
	    }
	  },
	  close: function(){
		$('#new-todo input').val('');  
	  }
  }); //koniec dialog
  $('#todo-list').on('click', '.done', function(){
	 var $taskItem =$(this).parent('li'); 
	 $taskItem.slideUp(250, function(){
		var $this = $(this);
        $this.detach();	
		$('#completed-list').prepend($this);
		$this.slideDown();
	 });//slideup
  });
  $('.sortlist').sortable({
	  connectWith: '.sortlist',
	  cursor: 'pointer',
	  placeholder: 'ui-state-highlight',
	  cancel: '.delete,.done'
  }).on('click', '.delete', function(){
	  $(this).parent('li').effect('puff', function(){
		$(this).remove();  
	  });
  });
  ;
}); // Koniec funkcji ready