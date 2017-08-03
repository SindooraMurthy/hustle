
<?php

function getArray($result){
  $arr = array();
  if ($result->num_rows > 0) {
      while($row = $result->fetch_assoc()) {
        array_push($arr, $row);
      }
  }
  return $arr;
}


//echo $_GET['brandname'];



	$data_brandName = $_GET['brandname'];
   
		require_once('connection.php');
       
		$query= "SELECT * FROM car_database2 WHERE carname = '$data_brandName'";

		$result = $dbc->query($query);
		$arr = getArray($result);
		echo json_encode($arr);     



?>
