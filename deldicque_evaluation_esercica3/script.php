<?php
function countInt($array, $int) {
  $i = 0;
  $currentElement;
  $countElement= 0;
  while ($i < count($array)) {
    $currentElement = $array[$i];
    if ($currentElement == $int) {
      $countElement++;
    }
    $i++;
  }
// echo $countElement;
return $countElement;
}
?>
