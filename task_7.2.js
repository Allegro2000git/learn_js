alert( alert(1) || 2 || alert(3) );

// undefined || 2 => 1, 2

alert( 1 && null && 2 );

// null

alert( alert(1) && alert(2) );

// 1 undefined

alert( null || 2 && 3 || 4 );

// 3