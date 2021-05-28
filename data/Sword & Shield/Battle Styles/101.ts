import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Bronzor",
		fr: "Archéomire"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	attacks: [{
		name: {
			en: "Ram",
			fr: "Collision"
		},

		damage: 30,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1
}

export default card