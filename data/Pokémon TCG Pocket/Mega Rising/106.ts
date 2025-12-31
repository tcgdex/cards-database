import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Jirachi"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		en: "It is said to have the ability to grant any wish for\njust one week every thousand years."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Star Drop"
		},

		cost: ["Psychic"],

		effect: {
			en: "This attack does 30 damage to 1 of your opponent's Pokémon."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria"]
}

export default card