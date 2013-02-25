<?php
require_once dirname(__FILE__).'/../../settings.php';

$settings = $GLOBALS['settings']['db'];
$conn = mysql_connect($settings['host'],$settings['username'],$settings['password']);

$arr = json_decode($_POST['customers'],true);
$keys = array_keys($arr);
$values = array_values($arr);
mysql_query("UPDATE classicmodels.customers SET $keys[0] = $values[0] WHERE $keys[1] = $values[1]") or die ("query error");
