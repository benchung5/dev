/* ==========================================================================
// log to file
========================================================================== */
    
$data = array('foo' => 'bar');
if (is_array($data)) {
    $data = implode( ',', $data);
}

//Something to write to txt log
$log  = 'User: '.$_SERVER['REMOTE_ADDR'].' - '.date("F j, Y, g:i a").PHP_EOL.
        'Data: '.$data.PHP_EOL.
        '-------------------------'.PHP_EOL;
//Save string to log, use FILE_APPEND to append.
file_put_contents('./log_'.date("j.n.Y").'.log', $log, FILE_APPEND);
