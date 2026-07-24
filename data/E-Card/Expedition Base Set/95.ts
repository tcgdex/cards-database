import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Mr. Mime",
		fr: "Bulbizarre",
		de: "Bisasam"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [122],

	hp: 50,

	types: [
		"Psychic"
	],

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Energy Barrier",
			},
			effect: {
				en: "If Mr. Mime would be damaged by an attack, reduce that damage by 10 for each basic Energy card attached to Mr. Mime. The maximum amount of damage that can be reduced by Energy Barrier is 20.",
			},
		},
	],,
	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Mind Shock",
				fr: "Graine dodo",
				de: "Schlafsamen"
			},
			effect: {
				en: "Don't apply Weakness and Resistance.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das Verteidigende Pokémon schläft jetzt."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Vine Whip",
				fr: "Fouet lianes",
				de: "Rankenhieb"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84027,
				cardmarket: 274969
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
