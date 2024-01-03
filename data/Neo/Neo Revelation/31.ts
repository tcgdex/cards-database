import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Jynx",
		fr: "Lippoutou",
		de: "Rossana"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		124,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Freezing Kiss Goodnight",
				fr: "Bisou glacial",
				de: "Freezing Kiss Goodnight"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "The Defending Pokémon is now Asleep."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Strange Dance",
				fr: "Danse étrange",
				de: "Strange Dance"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage and the Defending Pokémon is now Confused. If tails, this attack does 20 damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires et le Pokémon Défenseur est maintenant Confus. Si c'est pile, cette attaque inflige 20 dégâts.",
				de: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage and the Defending Pokémon is now Confused. If tails, this attack does 20 damage."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Il fait onduler son corps en rythme. Celui-ci semble changer selon son humeur."
	}
}

export default card
