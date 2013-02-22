<?php
require_once dirname(__FILE__).'/../../settings.php';

$settings = $GLOBALS['settings'];
$conn = mysql_connect($settings['db']['host'],$settings['db']['username'],$settings['db']['password']);
$result = mysql_query("SELECT * FROM classicmodels.customers");
$data = array();
while($row = mysql_fetch_array($result, MYSQL_ASSOC))
    {
        $customers[] = $row ; 
    }
$o = array('total'=>'20', 'customers' => $customers);
echo json_encode($o);
