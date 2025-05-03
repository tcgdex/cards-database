import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Flabébé"
	},

	illustrator: "Cona Nitanda",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],

	description: {
		en: "This Pokémon can draw forth the power hidden within blooming wild flowers. It is particularly fond of red flowers."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Hypnotic Gaze"
		},

		cost: ["Psychic"],

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
