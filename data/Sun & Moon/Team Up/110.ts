import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Klefki",
		fr: "Trousselin",
	},
	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		707,
	],
	hp: 60,
	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Key of Secrets",
				fr: "Clé des Secrets",
			},
			effect: {
				en: "Each of your Metal Pokémon's Resistance is now -40.",
				fr: "La Résistance de chacun de vos Pokémon Metal est maintenant -40.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Ram",
				fr: "Collision",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
