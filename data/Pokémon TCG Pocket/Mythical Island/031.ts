import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Mew"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		en: "Because it can use all kinds of moves, many scientists believe Mew to be the ancestor of Pokémon."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Psy Report"
		},

		damage: 20,
		cost: ["Psychic"],

		effect: {
			en: "Your opponent reveals their hand."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Three Diamond"
}

export default card
