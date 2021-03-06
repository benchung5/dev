<?php

// http://image.intervention.io/

// include composer autoload
require 'vendor/autoload.php';

// import the Intervention Image Manager Class
use Intervention\Image\ImageManagerStatic as Image;

// limit image size
public function limit_size($path)
{
  // read image from file
  $img = Image::make($path);
  
  $max_width = 1000;
  $max_height = 1000;

  if ($img->width() > $max_width || $img->height() > $max_height) {
    // resize to maximum width and maxium height
    $img->resize($max_width, $max_height, function ($constraint) {
        // constraining the aspect ratio
        $constraint->aspectRatio();
        // prevent possible upsizing
        $constraint->upsize();
      });
      
    return true;
  }
}

/* ==========================================================================
// insert watermark
========================================================================== */

// basic
$watermark = Image::make('public/watermark.png');
$img->insert($watermark, 'center');

// insert watermark at bottom-right corner with 10px offset
$img->insert('public/watermark.png', 'bottom-right', 10, 10);
