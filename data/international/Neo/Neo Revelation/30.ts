import { Card } from 'models/database/card'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		'en-us': "Graveler",
		'fr-fr': "Gravalanch",
		'de-de': "Georok"
	},

	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		75,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Geodude",
		'fr-fr': "Racaillou"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Earthquake",
				'fr-fr': "Séisme",
				'de-de': "Earthquake"
			},
			effect: {
				'en-us': "Does 10 damage to each of your own Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à chacun des Pokémon de votre propre Banc. (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon sur le Banc.)",
				'de-de': "Does 10 damage to each of your own Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Rock Tumble",
				'fr-fr': "Roule-pierre",
				'de-de': "Rock Tumble"
			},
			effect: {
				'en-us': "Don't apply Resistance.",
				'fr-fr': "N'appliquez pas la Résistance.",
				'de-de': "Don't apply Resistance."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "With a free and uncaring nature, it doesn't mind if pieces break off while it rolls down mountains.",
		'fr-fr': "De nature libre et peu souciante, il se moque de perdre des fragments de pierre en roulant sur les pentes des montagnes."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274616,
				tcgplayer: 85885
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274616,
				tcgplayer: 85885
			}
		}
	]
}

export default card

