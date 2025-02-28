import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Mew"
	},

	illustrator: "Amelicart",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Psy Report"
		},

		effect: {
			en: "Your opponent reveals their hand."
		},

		damage: "20"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Three Star",

	description: {
		en: "Because it can use all kinds of moves, many scientists believe Mew to be the ancestor of Pokémon.",
	}
}

export default card
