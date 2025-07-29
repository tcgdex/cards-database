import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Vaporeon",
		fr: "Aquali obscur",
		de: "Dunkles Aquana"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		134,
	],

	hp: 60,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Eevee",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
				de: "Bite"
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Whirlpool",
				fr: "Tourbillon",
				de: "Whirlpool"
			},
			effect: {
				en: "If the Defending Pokémon has any Energy cards attached to it, choose 1 of them and discard it.",
				fr: "Si le Pokémon Défenseur a au moins 1 carte Énergie attachée à lui, choisissez l'une d'elle et défaussez-la.",
				de: "If the Defending Pokémon has any Energy attached to it, choose 1 of them and discard it."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		fr: "Ce Pokémon est capable de contrôler l'eau, il est de ce fait capable de créer des tourbillons géants."
	},

	thirdParty: {
		cardmarket: 274098
	}
}

export default card
