import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Mesprit"
	},

	illustrator: "Orca",
	rarity: "One Star",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		en: "Known as \"The Being of Emotion.\" It taught humans the nobility of sorrow, pain, and joy."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Supreme Blast"
		},

		damage: 160,
		cost: ["Psychic", "Psychic", "Psychic"],

		effect: {
			en: "You can use this attack only if you have Uxie and Azelf on your Bench. Discard all Energy from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card
