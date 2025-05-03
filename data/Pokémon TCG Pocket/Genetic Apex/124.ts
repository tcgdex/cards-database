import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Drowzee"
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Mumble"
		},

		damage: "30"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],


	retreat: 2,
	rarity: "One Diamond",

	description: {
		en: "It remembers every dream it eats. It rarely eats the dreams of adults because children's are much tastier.",
	}
}

export default card
