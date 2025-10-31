import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Aromatisse"
	},

	illustrator: "kirisAki",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		en: "Spritzee"
	},

	description: {
		en: "The scents Aromatisse can produce range from\nsweet smells that bolster allies to foul smells\nthat sap an opponent's will to fight."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Confounding Cologne"
		},

		damage: 40,
		cost: ["Psychic"],

		effect: {
			en: "Your opponent's Active Pokémon is now Confused."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card