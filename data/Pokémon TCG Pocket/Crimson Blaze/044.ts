import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Mienshao"
	},

	illustrator: "Suwama Chiaki",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		en: "Mienfoo"
	},

	description: {
		en: "Delivered at blinding speeds, kicks from this\nPokémon can shatter massive boulders into\ntiny pieces."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Low Sweep"
		},

		damage: 50,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1
}

export default card