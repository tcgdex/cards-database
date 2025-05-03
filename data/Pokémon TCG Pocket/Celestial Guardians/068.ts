import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Tapu Koko"
	},

	illustrator: "kirisAki",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	description: {
		en: "Although it's called a guardian deity, if a person or Pokémon puts it in a bad mood, it will become a malevolent deity and attack."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Volt Switch"
		},

		damage: 70,
		cost: ["Lightning", "Lightning", "Lightning"],

		effect: {
			en: "Switch this Pokémon with 1 of your Benched  Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card