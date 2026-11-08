import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Silcoon",
		'fr-fr': "Armulys",
		'de-de': "Schaloko"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		266,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Wurmple",
		'fr-fr': "Chenipotte"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'de-de': "Ram"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Advanced Armor",
				'fr-fr': "Super armure",
				'de-de': "Advanced Armor"
			},
			effect: {
				'en-us': "During your opponent's next turn, prevent all effects of attacks, including damage, done to Silcoon by your opponent's Evolved Pokémon.",
				'fr-fr': "Lors du prochain tour de votre adversaire, prévenez tous les effets d'attaque, dégâts inclus, infligés à Armulys par le Pokémon Évolué de votre adversaire.",
				'de-de': "During your opponent's next turn, prevent all effects of attacks, including damage, done to Silcoon by your opponent's Evolved Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],


	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89211,
				cardmarket: 276449
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 89211,
				cardmarket: 276449
			},
		},
	],

}

export default card
