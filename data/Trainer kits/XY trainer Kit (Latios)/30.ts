import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Latios)'

const card: Card = {
	set: Set,

	name: {
		en: "Latios",
		fr: "Latios",
		es: "Latios",
		it: "Latios",
		pt: "Latios",
		de: "Latios"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "None",
	category: "Pokemon",

	description: {
		en: "It understands human speech and is highly intelligent. It is a tender Pokémon that dislikes fighting."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Supersonic Flight"
		},

		damage: 40,

		effect: {
			en: "Flip a coin. If tails, this attack does nothing."
		}
	}, {
		name: {
			en: "Psyburn"
		},

		damage: 70
	}],

	hp: 110,
	types: ["Psychic"],
	retreat: 1,

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}]
}

export default card