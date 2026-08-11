import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Suicune)'

const card: Card = {
	dexId: [580],
	set: Set,

	name: {
		en: "Ducklett",
		fr: "Couaneton",
		es: "Ducklett",
		it: "Ducklett",
		pt: "Ducklett",
		de: "Piccolente"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",
	retreat: 1,

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-20"
	}],

	thirdParty: {
		tcgplayer: 118842
	}
}

export default card