import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Mr. Mime"
	},

	illustrator: "Atsuko Nishida",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		en: "The broadness of its hands may be no coincidence—many scientists believe its palms became enlarged specifically for pantomiming."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Juggling"
		},

		damage: 20,
		cost: ["Psychic", "Colorless"],

		effect: {
			en: "Flip 4 coins. This attack does 20 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card