module.exports = () => ( {
    plugins: [
        require( 'postcss-px2rem' )( { remUnit: 16 } )
    ]
} )
