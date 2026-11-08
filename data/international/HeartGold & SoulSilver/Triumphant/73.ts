import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Porygon",
		'fr-fr': "Porygon",
		'de-de': "Porygon"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [137],

	hp: 50,

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
				'en-us': "Sharpen",
				'fr-fr': "Affûtage",
				'de-de': "Schärfer"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Recover",
				'fr-fr': "Soin",
				'de-de': "Genesung"
			},
			effect: {
				'en-us': "Discard an Energy attached to Porygon and remove 4 damage counters from Porygon.",
				'fr-fr': "Défaussez une carte Énergie attachée à Porygon et retirez-lui 4 marqueurs de dégât.",
				'de-de': "Lege 1 an Porygon angelegten Energie auf deinen Ablagestapel und entferne 4 Schadensmarken von Porygon."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "A manmade Pokémon that came about as a result of research. It is programmed with only basic motions."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88312,
				cardmarket: 279603
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279603,
				tcgplayer: 88312
			}
		},
	],

}

export default card
