const hostname  = 'localhost';
const port      = 4000;

const express   = require('express')

const app       = express()

app.use(express.urlencoded( {extended: true} ))

app.set( "view engine", "ejs" )

app.get( "/", function ( req, res ) {

    res.render( 'default', { 
        title: "Form",
        page: "form",
        data: {} // blank object
    } )

} )

app.post( "/", function ( req, res ) {

    res.render( 'default', { 
        title: "Process",
        page: "process",
        data: req.body // post form object
    } )

} )

/* port, hostname, callback */
app.listen( port, hostname, function () {

    console.log( `Server running at http://${hostname}:${port}/` );

} );
