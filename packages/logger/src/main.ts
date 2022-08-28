import { createLogger, format, transports } from 'winston'
import { formatter } from './formatter'

const { Console, File } = transports

export const logger = createLogger( {
	transports: [
		new File( { filename: 'history.log', format: format.combine(
			format.timestamp(),
			format.json()
		) } ),
		new Console( {
			format: format.combine(
				format.timestamp(),
				formatter
			)
		} )
	]
} )

export default logger
