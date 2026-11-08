import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Bagon",
		'de-de': "Kindwurm"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [371],
	
	hp: 60,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Smash Kick",
				'de-de': "Schmetterkick"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Super Singe",
				'de-de': "Super-Versengung"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Burned.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verbrannt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Dreaming of one day flying, it practices by leaping off cliffs every day."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83699,
				cardmarket: 278870
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278870,
				tcgplayer: 83699
			}
		},
	],

}

export default card
