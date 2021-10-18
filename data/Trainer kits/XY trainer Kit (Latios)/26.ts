import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Latios)'

const card: Card = {
	set: Set,

	name: {
		en: "Solrock",
		fr: "Solaroc",
		es: "Solrock",
		it: "Solrock",
		pt: "Solrock",
		de: "Sonnfel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",
	retreat: 1,

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}]
}

export default card