import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Slowpoke",
		de: "Flegmon"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		79,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dense",
				de: "Dense"
			},
			effect: {
				en: "Any damage done to Slowpoke by attacks from your opponent's Evolved Pokémon is reduced by 10 (after applying Weakness and Resistance).",
				de: "Any damage done to Slowpoke by attacks from your opponent's Evolved Pokémon is reduced by 10 (after applying Weakness and Resistance)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bite",
				de: "Bite"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276368,
		tcgplayer: 89328
	},

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
		}
	]
}

export default card

