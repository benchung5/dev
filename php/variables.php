<?php

/* ==========================================================================
isset
========================================================================== */

$myVariable = "hello";

if (isset($myVariable))
{
    echo "It is set.";
}

/* ==========================================================================
assigning variables by reference
========================================================================== */

// $a and $b point to the same content.
$a =& $b;


?>
