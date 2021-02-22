<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Saved data</title>
  </head>
  <body>
   <form method="POST" action="<?php echo $_SERVER['PHP_SELF'];?>">
     <label for="sortValue">Sort by:</label>
     <select name="sort-data" id="sortValue">
       <option value="date" selected>Date</option>
       <option value="email">Email</option>
     </select>  
     <button type="submit">SORT</button>
   </form>

<?php

require ('mysql.php');

if(empty($_POST['sort-data'])){
  $sort_value = "date";
} else {
  $sort_value = $_POST['sort-data'];
}

$result_set = $mysqli->query ("SELECT * FROM `users` ORDER BY $sort_value");
 
function printResult ($result_set) {
  while (($row = $result_set->fetch_assoc())) {  
    echo "<tr>";
    echo "<td>" . $row["date"] . "</td>";
    echo "<td>" . $row["email"] . "</td>";
    echo "</tr>";
  }
}
  
//table
echo "<table><tr><th>Date</th><th>Email</th></tr>";
printResult ($result_set);
echo "</table>";

$mysqli->close();
?>
  </body>
</html>
  
  