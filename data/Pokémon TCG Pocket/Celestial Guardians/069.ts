import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Mr. Mime"
	},

	illustrator: "Yukihiro Tada",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		en: "The broadness of its hands may be no coincidence—many scientists believe its palms became enlarged specifically for pantomiming."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Barrier Shove"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card