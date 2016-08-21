
$('.jstree-form input').each(function(index){
  $(this).attr('disabled', false);
});
swal(
  'Success!',
  'File was uploaded successfully!',
  'success'
);
