import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Seadra",
		fr: "Hypocéan"
	},

	illustrator: "0313",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		en: "Horsea",
		fr: "Hypotrempe"
	},

	attacks: [{
		name: {
			en: "Water Gun",
			fr: "Pistolet à O"
		},

		damage: 40,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card