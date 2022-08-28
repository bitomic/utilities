import { blue, cyan, green, magenta, red, yellow } from 'colorette'
import type { Color } from 'colorette'
import { format } from 'winston'
import util from 'util'

const colors: Record<string, Color> = {
	error: red,
	info: blue,
	warn: yellow
}

export type FormatterOptions = {
	label?: string
	level: string
	message: string
} & Record<string, string>

export const formatterFn = ( { label, level, message, timestamp }: FormatterOptions ) => {
	if ( typeof message === 'object' ) {
		message = util.inspect( message, { colors: true } )
	}
	const color = colors[ level ] ?? green
	if ( label ) label = cyan( label )
	level = color( level )
	const tag = label ? `${ label } | ${ level }` : level
	return `[${ magenta( timestamp ?? new Date().toISOString() ) }] ${ tag }: ${ message }`
}

export const formatter = format.printf( formatterFn )
