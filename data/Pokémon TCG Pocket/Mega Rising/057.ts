import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Wailord"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 200,
	types: ["Water"],

	evolveFrom: {
		en: "Wailmer"
	},

	description: {
		en: "The biggest of all Pokémon. It can dive to a depth\nof almost 10,000 feet on only one breath."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Whale Pump"
		},

		damage: 60,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		effect: {
			en: "This attack does 10 more damage for each {W} Energy attached to this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 4
}

export default card