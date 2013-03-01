<?php
require_once dirname(__FILE__).'/../../settings.php';

$settings = $GLOBALS['settings']['db'];
$conn = mysql_connect($settings['host'],$settings['username'],$settings['password']);
$action = $_GET;

switch($action['action']){
    case 'create':
        break;
    
    case 'read':
        read();
        break;
    
    case 'update':
        update();
        break;
    
    case 'destroy':
        break;
}

function read(){
    global $conn;
    $result = mysql_query("SELECT * FROM classicmodels.customers");
    $data = array();
    while($row = mysql_fetch_array($result, MYSQL_ASSOC))
        {
            $customers[] = $row ; 
        }
        
    $o = array('total'=>'20', 'customers' => $customers);
    echo json_encode($o);
    mysql_close($conn);
}
function update(){
    global $conn;
    $arr = json_decode($_POST['customers'],true);
    $keys = array_keys($arr);
    $values = array_values($arr);
    $query = "UPDATE classicmodels.customers SET $keys[0] = '$values[0]' WHERE $keys[1] = '$values[1]'"; 
    echo json_encode($query);
    mysql_query($query) or die ("query error");
    mysql_close($conn);
}
