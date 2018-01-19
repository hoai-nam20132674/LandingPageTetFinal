$(document).ready(function(){
	// $(".postDangky").click(function(event){
	// 	var ten = $('input[name=ten]');
	// 	var sdt = $('input[name=sdt]');
		// $.post( "/postDangky", { ten: "ten.val()", sdt: "sdt.val()" });
	// 	$.ajax({  
 //            type: "POST",  
 //            url: "/postDangky",  
 //            data: {'topic': topic},  
 //            success: function(dataString) {  
 //                $('#mentor_list').load('/mentorlist');
 //                console.log('**mentor_list div updated via ajax.**'); 
 //            }  
 //        });
	// });
	$("div.alert").delay(3000).slideUp();

	$("#dang-ky-uu-dai").modal('show');
	
	$("#d").countdown("2018/02/16", function(event) {
		$(this).text(
			event.strftime('%D')
			);
	});
	$("#h").countdown("2018/02/16", function(event) {
		$(this).text(
			event.strftime('%H')
			);
	});
	$("#m").countdown("2018/02/16", function(event) {
		$(this).text(
			event.strftime('%M')
			);
	});
	$("#s").countdown("2018/02/16", function(event) {
		$(this).text(
			event.strftime('%S')
			);
	});
});