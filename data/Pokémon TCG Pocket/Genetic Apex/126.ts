import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Mr. Mime"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Barrier Attack"
		},

		effect: {
			en: "During your opponent's next turn, this Pokémon takes -20 damage from attacks."
		},

		damage: "30"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		en: "The broadness of its hands may be no coincidence—many scientists believe its palms became enlarged specifically for pantomiming.",
	}
}

export default card
