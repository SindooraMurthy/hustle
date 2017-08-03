$(document).ready(function(){
    $("#submitcar").click(function(){
    	var searchURL = "sindoorasearch.php?brandname="+$("#carBrandIP").val();
		$.ajax
		({
		    url : searchURL,
		    type: "GET",
		    dataType: "json",
		    success: function(data, textStatus, jqXHR)	    
		    {   
		        var finalresult = getcardata(data);

		        $("#showcar").html(finalresult);
		       	        

            }         
     
		    
    	});
    });
});

function getcardata(data)
{ 
	var obj = data;
     var contents="";

    for (var j = 0; j < obj.length; j++)
    {   
    	console.log(obj[j]);
    	
    	contents+= "<tr>";
        contents+= "<td> Price of the Car : " + obj[j].price +"<br/></td>";
        contents+= "</tr>";
        contents+= "<tr>";
        contents+= "<td> Type of the Car : " + obj[j].type +"<br/></td>";
        contents+= "</tr>";
        contents+= "<tr>";
        contents+= "<td> Color of the Car : " + obj[j].color +"<br/></td>";
        contents+= "</tr>";
        contents+= "<tr>";
        contents+= "<td> Descripton of the Car : " + obj[j].description +"<br/></td>";
        contents+= "</tr>";
        contents+= "<tr>";
        contents+= "<td> Total distance Travelled till date : " + obj[j].distance_travelled +"<br/></td>";
        contents+= "</tr>";
     }
     $("#showcar").html(contents);
}

