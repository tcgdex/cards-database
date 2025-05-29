import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Luxray"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	evolveFrom: {
		en: "Luxio"
	},

	description: {
		en: "It can see clearly through walls to track down its\nprey and seek its lost young."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Intimidating Fang"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, attacks used by your opponent's Active Pokémon do −20 damage."
		}
	}],

	attacks: [{
		name: {
			en: "Electric Ball"
		},

		damage: 90,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card