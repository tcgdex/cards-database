import { exec, spawn } from 'node:child_process'

/**
 * run a command on the OS, it uses Spawn by default because exec seems to have a bug linked to the Buffer
 *
 * @param command the command to run
 * @param useSpawn select the method to use to run the command
 * @returns a string with the stdout
 */
export function runCommand(command: string, useSpawn = true): Promise<string> {
	if (!useSpawn) {
		return new Promise<string>((res, rej) => {
			exec(command, (err, out) => {
				if (err) {
					rej(err)
				}
				res(out)
			})
		})
	}
	const splitted = command.split(' ')
	command = splitted.shift()!

	return new Promise<string>((res, rej) => {
		const cmd = spawn(command, splitted)
		let out: string = ''
		cmd.stdout.on('data', (data) => {
			out += data.toString()
		})

		cmd.on('close', (code) => {
			if (code !== 0) {
				console.log(`command exited with code ${code}`);
				rej(code)
				return
			}
			res(out)
		})
	})
}
