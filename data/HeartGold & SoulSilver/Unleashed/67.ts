import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Turtwig",
		fr: "Tortipouss",
	},

	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		387,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Leech Seed",
				fr: "Vampigraine",
			},
			effect: {
				en: "If this attack does any damage to the Defending Pokémon (after applying Weakness and Resistance), remove 1 damage counter from Turtwig.",
				fr: "Si cette attaque inflige des dégâts au Pokémon Défenseur (après application de la Faiblesse et de la Résistance), retirez 1 marqueur de dégât à Tortipouss.",
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ram",
				fr: "Collision",
			},

			damage: 20,

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
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "Photosynthesis occurs across its body under the sun. The shell on its back is actually hardened soil."
	},

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	}
}

export default card
