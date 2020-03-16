$(document).ready(function() {
  var table = $('#dataTable').DataTable( {
      order: [[ 1, 'asc' ], [ 2, 'asc' ]],
      scrollY: '50vh',
      scrollCollapse: true,
      paging: false,
    //   lengthChange: true,
    //   lengthMenu: [10,25,50],
      buttons: [ 'excel', 'pdf']
  } );

  table.buttons().container()
      .appendTo( '#dataTable_wrapper .col-md-6:eq(0)' );
} );