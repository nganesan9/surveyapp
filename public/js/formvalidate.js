$(window).load(function() {	
    
	$.ajax({
			url: "/abc",
			type: "GET",
			dataType: "json",
			data:{allcities: ""},
			contentType: "application/json",
			cache: true,
			timeout: 5000,
			complete: function() {
			  //called when complete
			  console.log('process complete');
			},
			success: function(data) {
				var city_drop_down;
				for(var i=0; i<data.length; i++)
				{
					var city_option = '';
					var city_name = data[i].city;
					var city_value = data[i].city;
					city_value = city_value.toString().toLowerCase();
					city_value = city_value.replace(/ /g,'');
					city_option = '<option style=\"font-family: montserrat, arial, verdana\" class=\"city_names\" value=\"' + city_value + '\">' + city_name + '</option>';
					city_drop_down += city_option;
					console.log(city_value);
				}			
				document.getElementById("cityname").innerHTML = city_drop_down;
			},

			error: function() {
			  console.log('process error');
			},			
	});		
	
	
	document.getElementById("thankyou").style.display = "none"; //Show thank you message and hide form
	var current_fs, next_fs, previous_fs; //fieldsets
	var left, opacity, scale; //fieldset properties which we will animate
	var animating; //flag to prevent quick multi-click glitches
	/*
	 $('#cityname').bind('change', function() {
        var elements = $('div.events').children().hide(); // hide all the elements
        var value = $(this).val();

        if (value.length) { // if somethings' selected
            elements.filter('.' + value).show(); // show the ones we want
        }
    }).trigger('change');
	*/
	
	console.log("Checking for date picker");
	//For date
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
	    dd='0'+dd;
	} 

	if(mm<10) {
	    mm='0'+mm;
	} 

	today = mm+'/'+dd+'/'+yyyy;
	document.getElementById("eventdate").value = today;
	document.getElementById("event_date_display").innerHTML = "<label for=\"city\">Date : </label>" + today;

	console.log(new Date());
    console.log("Finished Checking for date");
	
	$("#other_stack").click(function(){
		document.getElementById("other_stack_entry").removeAttribute("disabled");
		document.getElementById("other_stack_entry").setAttribute("placeholder","Enter stack..");
	});
	$("#lamp").click(function(){
		document.getElementById("other_stack_entry").setAttribute("disabled","true");
		document.getElementById("other_stack_entry").setAttribute("placeholder","Enter stack..");
		document.getElementById("other_stack_entry").setAttribute("style","padding-left: 5px; margin-left: 30px; width: 155px !important; border:1px solid #808080");
	});
	$("#mean").click(function(){
		document.getElementById("other_stack_entry").setAttribute("disabled","true");
		document.getElementById("other_stack_entry").setAttribute("placeholder","Enter stack..");
		document.getElementById("other_stack_entry").setAttribute("style","padding-left: 5px; margin-left: 30px; width: 155px !important; border:1px solid #808080");
	});
	$("#open_stack").click(function(){
		document.getElementById("other_stack_entry").setAttribute("disabled","true");
		document.getElementById("other_stack_entry").setAttribute("placeholder","Enter stack..");
		document.getElementById("other_stack_entry").setAttribute("style","padding-left: 5px; margin-left: 30px; width: 155px !important; border:1px solid #808080");
	});
	$("#lyme").click(function(){
		document.getElementById("other_stack_entry").setAttribute("disabled","true");
		document.getElementById("other_stack_entry").setAttribute("placeholder","Enter stack..");
		document.getElementById("other_stack_entry").setAttribute("style","padding-left: 5px; margin-left: 30px; width: 155px !important; border:1px solid #808080");
	});
	$("#xampp").click(function(){
		document.getElementById("other_stack_entry").setAttribute("disabled","true");
		document.getElementById("other_stack_entry").setAttribute("placeholder","Enter stack..");
		document.getElementById("other_stack_entry").setAttribute("style","padding-left: 5px; margin-left: 30px; width: 155px !important; border:1px solid #808080");
	});
	$("#mamp").click(function(){
		document.getElementById("other_stack_entry").setAttribute("disabled","true");
		document.getElementById("other_stack_entry").setAttribute("placeholder","Enter stack..");
		document.getElementById("other_stack_entry").setAttribute("style","padding-left: 5px; margin-left: 30px; width: 155px !important; border:1px solid #808080");
	});
	$("#wamp").click(function(){
		document.getElementById("other_stack_entry").setAttribute("disabled","true");
		document.getElementById("other_stack_entry").setAttribute("placeholder","Enter stack..");
		document.getElementById("other_stack_entry").setAttribute("style","padding-left: 5px; margin-left: 30px; width: 155px !important; border:1px solid #808080");
	});
	$("#not_dev").click(function(){
		document.getElementById("other_stack_entry").setAttribute("disabled","true");
		document.getElementById("other_stack_entry").setAttribute("placeholder","Enter stack..");
		document.getElementById("other_stack_entry").setAttribute("style","padding-left: 5px; margin-left: 30px; width: 155px !important; border:1px solid #808080");
	});
	
	$("#other_runtime").click(function(){
		document.getElementById("other_runtime_entry").removeAttribute("disabled");
		document.getElementById("other_runtime_entry").setAttribute("placeholder","Enter other runtime");
	});
	
	$("#no_code").click(function()
	{
		document.getElementById("other_runtime_entry").setAttribute("disabled","true");
		document.getElementById("other_runtime_entry").setAttribute("placeholder","Enter other runtime");
		document.getElementById("other_runtime_entry").setAttribute("style","padding-left: 5px; margin-left: 30px; width: 155px !important; border:1px solid #808080");
	});
	$("#java").click(function()
	{
		document.getElementById("other_runtime_entry").setAttribute("disabled","true");
		document.getElementById("other_runtime_entry").setAttribute("placeholder","Enter other runtime");
		document.getElementById("other_runtime_entry").setAttribute("style","padding-left: 5px; margin-left: 30px; width: 155px !important; border:1px solid #808080");
	});
	$("#nodejs").click(function()
	{
		document.getElementById("other_runtime_entry").setAttribute("disabled","true");
		document.getElementById("other_runtime_entry").setAttribute("placeholder","Enter other runtime");
		document.getElementById("other_runtime_entry").setAttribute("style","padding-left: 5px; margin-left: 30px; width: 155px !important; border:1px solid #808080");
	});
	$("#ruby").click(function()
	{
		document.getElementById("other_runtime_entry").setAttribute("disabled","true");
		document.getElementById("other_runtime_entry").setAttribute("placeholder","Enter other runtime");
		document.getElementById("other_runtime_entry").setAttribute("style","padding-left: 5px; margin-left: 30px; width: 155px !important; border:1px solid #808080");
	});
	$("#python").click(function()
	{
		document.getElementById("other_runtime_entry").setAttribute("disabled","true");
		document.getElementById("other_runtime_entry").setAttribute("placeholder","Enter other runtime");
		document.getElementById("other_runtime_entry").setAttribute("style","padding-left: 5px; margin-left: 30px; width: 155px !important; border:1px solid #808080");
	});
	$("#php").click(function()
	{
		document.getElementById("other_runtime_entry").setAttribute("disabled","true");
		document.getElementById("other_runtime_entry").setAttribute("placeholder","Enter other runtime");
		document.getElementById("other_runtime_entry").setAttribute("style","padding-left: 5px; margin-left: 30px; width: 155px !important; border:1px solid #808080");
	});
	$("#go").click(function()
	{
		document.getElementById("other_runtime_entry").setAttribute("disabled","true");
		document.getElementById("other_runtime_entry").setAttribute("placeholder","Enter other runtime");
		document.getElementById("other_runtime_entry").setAttribute("style","padding-left: 5px; margin-left: 30px; width: 155px !important; border:1px solid #808080");
	});
	$("#objc").click(function()
	{
		document.getElementById("other_runtime_entry").setAttribute("disabled","true");
		document.getElementById("other_runtime_entry").setAttribute("placeholder","Enter other runtime");
		document.getElementById("other_runtime_entry").setAttribute("style","padding-left: 5px; margin-left: 30px; width: 155px !important; border:1px solid #808080");
	});
	$("#swift").click(function()
	{
		document.getElementById("other_runtime_entry").setAttribute("disabled","true");
		document.getElementById("other_runtime_entry").setAttribute("placeholder","Enter other runtime");
		document.getElementById("other_runtime_entry").setAttribute("style","padding-left: 5px; margin-left: 30px; width: 155px !important; border:1px solid #808080");
	});
	$("#html").click(function()
	{
		document.getElementById("other_runtime_entry").setAttribute("disabled","true");
		document.getElementById("other_runtime_entry").setAttribute("placeholder","Enter other runtime");
		document.getElementById("other_runtime_entry").setAttribute("style","padding-left: 5px; margin-left: 30px; width: 155px !important; border:1px solid #808080");
	});
	$("#net").click(function()
	{
		document.getElementById("other_runtime_entry").setAttribute("disabled","true");
		document.getElementById("other_runtime_entry").setAttribute("placeholder","Enter other runtime");
		document.getElementById("other_runtime_entry").setAttribute("style","padding-left: 5px; margin-left: 30px; width: 155px !important; border:1px solid #808080");
	});
	$("#perl").click(function()
	{
		document.getElementById("other_runtime_entry").setAttribute("disabled","true");
		document.getElementById("other_runtime_entry").setAttribute("placeholder","Enter other runtime");
		document.getElementById("other_runtime_entry").setAttribute("style","padding-left: 5px; margin-left: 30px; width: 155px !important; border:1px solid #808080");
	});
	
	
	$("#use_bluemix_no" ).click(function() {
		document.getElementById("no_reason").removeAttribute("disabled");
	});
	$("#use_bluemix_yes" ).click(function() {
		document.getElementById("no_reason").setAttribute("disabled","true");
		document.getElementById("no_reason").setAttribute("placeholder","Why not ?");
		document.getElementById("no_reason").setAttribute("style","padding-left: 5px; margin-left: 30px; width: 155px !important; border:1px solid #808080"); 
	});
	$("#use_bluemix_maybe" ).click(function() {
		document.getElementById("no_reason").setAttribute("disabled","true");
		document.getElementById("no_reason").setAttribute("placeholder","Why not ?");
		document.getElementById("no_reason").setAttribute("style","padding-left: 5px; margin-left: 30px; width: 155px !important; border:1px solid #808080"); 
	});
	
	$(".next").click(function(){

		//if(animating) return false;
		animating = true;
		current_fs = $(this).parent(); //next.
		//Validate form for empty field		
		if(current_fs.attr("id") === "recommendations")
		{
	       if(document.getElementById("q3_recommendations").value.length === 0)
	       {
			   document.getElementById("q3_recommendations").setAttribute("style","border:4px solid #ff0000");
			   alert("Can't leave field blank. Enter improvement suggestions or NA. Fill answers to click previous or next.");
			   return;
		   }
		   else if(document.getElementById("q3_recommendations").value.length !== 0)
		   {
			   document.getElementById("q3_recommendations").setAttribute("style","border:1px solid #808080"); 
		   }
	    }
		else if(current_fs.attr("id") === "runtime")
		{
			if(document.getElementById("other_runtime").checked)
			{
				if(document.getElementById("other_runtime_entry").value.length === 0)
				{
     				document.getElementById("other_runtime_entry").setAttribute("style","padding-left: 5px; margin-left: 30px; width: 155px !important; border:4px solid #ff0000");
					alert("Please enter runtime");
					return;
				}
				else if(document.getElementById("other_runtime_entry").value.length !== 0)
				{
					document.getElementById("other_runtime_entry").setAttribute("style","padding-left: 5px; margin-left: 30px; width: 155px !important; border:1px solid #808080");
				}
			}
		}
		else if(current_fs.attr("id") === "stack")
		{
		 /*
		  if(document.getElementById("q5_stack").value.length === 0)
		  {
				document.getElementById("q5_stack").setAttribute("style","border:4px solid #ff0000");
				alert("Can't leave field blank. Enter favourite stack or NA.");
				return;
		  }
		  else if(document.getElementById("q5_stack").value.length !== 0)
		  {
			  document.getElementById("q5_stack").setAttribute("style","border:1px solid #808080");
		  }
		  */
		    if(document.getElementById("other_stack").checked) 
			{
				if(document.getElementById("other_stack_entry").value.length === 0)
				{
     				document.getElementById("other_stack_entry").setAttribute("style","padding-left: 5px; margin-left: 30px; width: 155px !important; border:4px solid #ff0000");
					alert("Enter stack..");
					return;					
				}
				else if(document.getElementById("other_stack_entry").value.length !== 0)
				{
					document.getElementById("other_stack_entry").setAttribute("style","padding-left: 5px; margin-left: 30px; width: 155px !important; border:1px solid #808080");
				}
			}
	    }
	    else if(current_fs.attr("id") === "features")
	    {
		  if(document.getElementById("q6_newfeatures").value.length === 0)
		  {
				document.getElementById("q6_newfeatures").setAttribute("style","border:4px solid #ff0000");
				alert("Can't leave field blank. Enter new feature suggestions or NA.");
				return;
		  }	     
		  else if(document.getElementById("q6_newfeatures").value.length !== 0)
		  {
			    document.getElementById("q6_newfeatures").setAttribute("style","border:1px solid #808080"); 
		  }
	    }
		
		else if(current_fs.attr("id") === "use_bluemix")
		{
			if(document.getElementById("use_bluemix_no").checked)
			{
				document.getElementById("no_reason").removeAttribute("disabled");
				if(document.getElementById("no_reason").value.length === 0)
				{
					document.getElementById("no_reason").setAttribute("style","padding-left: 5px; margin-left: 30px; width: 155px !important; border:4px solid #ff0000");
					alert("Please enter reason");
					return;
				}
				else if(document.getElementById("no_reason").value.length !== 0)
				{
					document.getElementById("no_reason").setAttribute("style","padding-left: 5px; margin-left: 30px; width: 155px !important; border:1px solid #808080");
				}
			}
			if(document.getElementById("use_bluemix_yes").checked)
			{
				document.getElementById("no_reason").setAttribute("disabled","true");
				document.getElementById("no_reason").setAttribute("placeholder","Why not ? ");
				document.getElementById("no_reason").setAttribute("style","padding-left: 5px; margin-left: 30px; width: 155px !important; border:1px solid #808080");
			}
			if(document.getElementById("use_bluemix_maybe").checked)
			{
				document.getElementById("no_reason").setAttribute("disabled","true");
				document.getElementById("no_reason").setAttribute("placeholder","Why not ? ");
				document.getElementById("no_reason").setAttribute("style","padding-left: 5px; margin-left: 30px; width: 155px !important; border:1px solid #808080");
			}			
		}
		
		next_fs = $(this).parent().next();

		
		//activate next step on progressbar using the index of next_fs
		$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
		
		//show the next fieldset
		next_fs.show(); 

		//hide the current fieldset with style
		current_fs.animate({opacity: 0}, {
			step: function(now, mx) {
				//as the opacity of current_fs reduces to 0 - stored in "now"
				//1. scale current_fs down to 80%
				scale = 1 - (1 - now) * 0.2;
				//2. bring next_fs from the right(50%)
				left = (now * 50)+"%";
				//3. increase opacity of next_fs to 1 as it moves in
				opacity = 1 - now;
				current_fs.css({'transform': 'scale('+scale+')'});
				next_fs.css({'left': left, 'opacity': opacity});
			}, 
			duration: 800, 
			complete: function(){
				current_fs.hide();
				animating = false;
			}, 
			//this comes from the custom easing plugin
			easing: 'easeInQuint'
		});
	});
	
	$(".previous").click(function(){
		if(animating) return false;
		animating = true;
		
		current_fs = $(this).parent();

		
		previous_fs = $(this).parent().prev();
		
		//de-activate current step on progressbar
		$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
		
		//show the previous fieldset
		previous_fs.show(); 
		//hide the current fieldset with style
		current_fs.animate({opacity: 0}, {
			step: function(now, mx) {
				//as the opacity of current_fs reduces to 0 - stored in "now"
				//1. scale previous_fs from 80% to 100%
				scale = 0.8 + (1 - now) * 0.2;
				//2. take current_fs to the right(50%) - from 0%
				left = ((1-now) * 50)+"%";
				//3. increase opacity of previous_fs to 1 as it moves in
				opacity = 1 - now;
				current_fs.css({'left': left});
				previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
			}, 
			duration: 800, 
			complete: function(){
				current_fs.hide();
				animating = false;
			}, 
			//this comes from the custom easing plugin
			easing: 'easeOutQuint'
		});
	});
	
	$(".submit").click(function(e){
		// console.log("Going to submit");
		// Retrieve form data
//		var runtime = null, meanstack = null, newfeatures = null, facilitator_rating = null, recommendations = null;
//		var eventneeds = null, useBluemix = null, email_twitter = null;
//		runtime = document.querySelector('input[name="q1_runtime"]:checked').value;
//		if(runtime === "other")
//		{
//			runtime = document.getElementById("other").value;
//	    }
//		meanstack = document.getElementById("q2_meanstack").value;
//		newfeatures = document.getElementById("q3_newfeatures").value;
////		alert("New features are " + newfeatures);
//		facilitator_rating = document.querySelector('input[name="q4_facilitator"]:checked').value;
////		alert("Facilitator was rated as : " + facilitator_rating);		
//		recommendations = document.getElementById("q5_recommendations").value;
////		alert("Recommendations : " + recommendations);
//		eventneeds = document.querySelector('input[name="q6_eventneeds"]:checked').value;
////		alert("Meeting satisfaction : " + eventneeds);
//		useBluemix = document.querySelector('input[name="q7_useBlumeix"]:checked').value;
////		alert("Re-use bluemix : " + useBluemix);
//		email_twitter = document.getElementById("q8_email_twit").value;
//		alert("Email and twitter : " + email_twitter);
////		
//		alert("Runtime:"+runtime+"\nMeanstack:"+meanstack+"\nNewfeatures:"+newfeatures+"\nFacilitatorRating:"+facilitator_rating+"\nRecommendations:"+recommendations+"\nEventNeeds:"+eventneeds+"\nUse Bluemix for future projects:"+useBluemix+"\nEmail/Twitter:"+email_twitter);
		// var form_page = document.getElementById("msform");
		// form_page.style.display = 'none';
		// var thankyou_page = document.getElementById("thankyou");
		// thankyou_page.style.display = 'block'; //Show thank you message and hide form		
		//$("#thankyou").css("display","block");
		//$("#msform").css("display", "none");
		// console.log("Done");
		//var form_data = document.getElementsByName('surveyform')[0];
		//form_data.reset();
		//return false;
		//document.getElementById("msform").reset();
		return true;
	});
});