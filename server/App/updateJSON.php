<?php
require_once dirname(__FILE__).'/../../settings.php';

$settings = $GLOBALS['settings']['db'];
$conn = mysql_connect($settings['host'],$settings['username'],$settings['password']);
//mysql_query(UPDATE classicmodels.customers SET)
print_r($_POST);