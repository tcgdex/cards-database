export interface Command<T extends object = {}> {
	type: string
	data?: T
}

export default class ClusterUtils {
	public static sendAndReceive<T extends object>(cmd: Command, type: string): Promise<Command<T>> {
		return new Promise((res) => {
			const fn = (message: Command) => {
				// ignore message that are not of the correct type
				if (message.type !== type) {
					return
				}

				// send back message
				res(message as Command<T>)

				// stop listening
				process.off('message', fn)
			}

			// listen to message
			process.on('message', fn)

			// send command
			process.send?.(cmd)
		})
	}
}
