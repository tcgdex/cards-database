import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Kirlia"
	},

	illustrator: "mingo",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		en: "Ralts"
	},

	description: {
		en: "The cheerful spirit of its Trainer gives it energy\nfor its psychokinetic power. It spins and dances\nwhen happy."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Psybeam"
		},

		damage: 20,
		cost: ["Psychic"],

		effect: {
			en: "Your opponent's Active Pokémon is now Confused."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card