import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Blacephalon ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Singe"
		},

		cost: ["Fire"],

		effect: {
			en: "Your opponent's Active Pokémon is now Burned."
		}
	}, {
		name: {
			en: "Pop-Punk"
		},

		damage: 140,
		cost: ["Fire", "Fire", "Fire"],

		effect: {
			en: "Discard 3 {R} Energy from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2
}

export default card