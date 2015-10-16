test( "hello test", function() {
  ok( 1 == "1", "Passed!" );
  ok( true, "true succeeds" );
  ok( "non-empty", "non-empty string succeeds" );
 
  ok( false, "false fails" );
  ok( 0, "0 fails" );
  ok( NaN, "NaN fails" );
  ok( "", "empty string fails" );
  ok( null, "null fails" );
  ok( undefined, "undefined fails" );
  
});

asyncTest( "asynchronous test: one second later!", function() {
  expect( 1 );
 
  setTimeout(function() {
    ok( true, "Passed and ready to resume!" );
    start();
  }, 1000);
});

test( "a test", function() {
  expect( 3 );
 
  function calc( x, operation ) {
    return operation( x );
  }
 
  var result = calc( 2, function( x ) {
    ok( true, "calc() calls operation function" );
    return x * x;
  });
 
  equal( result, 4, "2 square equals 4" );
});