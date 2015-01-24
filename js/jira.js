var request;
function makeJira(){

	//curl -D- -u test:test -X POST --data  '{ "fields": {  "project": { "key": "OPSC" }, "summary": "This is the summary.", "description": "This is a description", "issuetype": { "name": "New Feature"} }}' -H "Content-Type: application/json" http://localhost:8080/rest/api/2/issue/

	var key =  $("#select-project-button option:selected").text(); 
	var summary = $("#textarea-summary").val();
	var description = $("#textarea-description").val();
	var issuetype = $("#textarea-issue-type").val();

	myJson ={  
		"fields":{  
			"project":{  
				"key":key.toUpperCase()
				},
				"summary":summary,
				"description":description,
				"issuetype":{  
					"name":issuetype
				}
			}
			};

			var userPw = btoa("test:test");

			request = $.ajax({
				url: "http://localhost:8080/rest/api/2/issue/",
				type: "POST",
				data: JSON.stringify(myJson),
				contentType:"application/json",
				beforeSend: function (xhr){ 
					xhr.setRequestHeader('Authorization', 'Basic '+userPw); 
				}
				}).done(function() {
					$( this ).addClass( "done" );
					});
				}
