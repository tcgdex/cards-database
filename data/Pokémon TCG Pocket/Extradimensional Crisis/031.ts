import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Claydol"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		en: "Baltoy"
	},

	description: {
		en: "This mysterious Pokémon started life as an ancient\nclay figurine made over 20,000 years ago."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Heal Block"
		},

		effect: {
			en: "Pokémon (both yours and your opponent's) can't be healed."
		}
	}],

	attacks: [{
		name: {
			en: "Power Beam"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card