<?php
$conn = mysql_connect('localhost','root','');
$result = mysql_query("SELECT * FROM classicmodels.customers");
$data = array();
while($row = mysql_fetch_array($result, MYSQL_ASSOC))
    {
        $cds[] = $row ; 
    }
$o = array('total'=>'20','cds'=>$cds);
echo json_encode($o);
