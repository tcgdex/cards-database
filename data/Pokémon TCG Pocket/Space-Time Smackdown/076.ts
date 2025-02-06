import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Mesprit"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Three Diamond",
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
			en: "You can use this attack only if you have <a class=\"localized-string__link\" href=\"/pokemon/uxie/\">Uxie</a> and <a class=\"localized-string__link\" href=\"/pokemon/azelf/\">Azelf</a> on your Bench. Discard all Energy from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card
