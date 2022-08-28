import { formatterFn, type FormatterOptions } from './formatter'
import split from 'split'

process.stdin
	.pipe( split() )
	.on( 'data', ( line: string ) => {
		if ( line.length === 0 ) return
		const options = JSON.parse( line ) as FormatterOptions
		process.stdout.write( `${ formatterFn( options )  }\n` )
	} )
