import cluster from 'node:cluster'

export interface Command<T extends object = {}> {
	type: string
	data?: T
}

export default class ClusterUtils {
	public static sendAndReceive<T extends object>(cmd: Command, type: string): Promise<Command<T>> {
		return new Promise((res) => {
			const fn = (command: Command) => {
				console.log('master sent', command)
				// ignore message that are not of the correct type
				if (command.type !== type) {
					return
				}

				// send back message
				res(command as Command<T>)

				// stop listening
				process.off('message', fn)
			}

			// listen to message
			process.on('message', fn)

			// send command
			process.send?.(cmd)
		})
	}

	public static broadcard(command: Command) {
		console.log(cluster.workers)
		for (const worker of Object.values(cluster.workers!)) {
			worker?.send(command)
		}
	}
}
