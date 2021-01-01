<?php 
  header("Access-Control-Allow-Origin: *");
  header('Content-Type: application/json');

  require("../config.php");

  
  $connection = new mysqli($hostname, $username, $password, $dbname);


  function getAssocObject($value) {
    if (sizeof($value) > 1) return $value;
    else {
      $v;
      foreach ($value as $key => $val) {
        $v = $val;
      }
      return $v;
    }
  }

  function getData($query) {
    global $connection;
    $response = $connection->query($query);
    $data = [];

    if ($response->num_rows === 1) $data = getAssocObject($response->fetch_assoc());
    else if ($response->num_rows) {
      while ($row = $response->fetch_assoc()) {
        array_push($data, getAssocObject($row));
      }
    }

    return $data;
  }

  
  $data = [];

  $data["users"] = getData("SELECT id, name, surname, strazak, ratownik, kierowca, status FROM users WHERE strazak = 1");
  $data["available"] = [
    "all" => getData("SELECT count(id) as amount FROM users WHERE strazak = 1 AND status = 0"),
    "drivers" => getData("SELECT count(id) as amount FROM users WHERE kierowca = 1 AND status = 0"),
    "rescuers" => getData("SELECT count(id) as amount FROM users WHERE ratownik = 1 AND status = 0"),
  ];
  $connection->close();


  echo json_encode($data);
?>