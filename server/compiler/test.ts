import fn from './endpoints/cards'
import { loadLastEdits } from './utils/util'
;(async () => {

	await loadLastEdits()
	// console.log(
	// 	(await fn('en'))[0]
	// 	)
	process.exit(0)
})()
