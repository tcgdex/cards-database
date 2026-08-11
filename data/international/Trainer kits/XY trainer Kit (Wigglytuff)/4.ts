import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Wigglytuff)'

const card: Card = {
	dexId: [161],
	set: Set,

	name: {
		en: "Sentret",
		fr: "Fouinette",
		es: "Sentret",
		it: "Sentret",
		pt: "Sentret",
		de: "Wiesor"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",
	retreat: 1,

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	thirdParty: {
		tcgplayer: 98190
	}
}

export default card