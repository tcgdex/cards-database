import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Lombre",
		'fr-fr': "Lombre",
		'de-de': "Lombrero"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		271,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Lotad",
		'fr-fr': "Nénupiot"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Natural Cure",
				'fr-fr': "Guérison naturelle",
				'de-de': "Natural Cure"
			},
			effect: {
				'en-us': "When you attach a Water Energy card from your hand to Lombre, remove all Special Conditions from Lombre.",
				'fr-fr': "Lorsque vous attachez une carte Énergie  de votre main à Lombre, retirez-lui tous ses États Spéciaux.",
				'de-de': "When you attach a  Energy card from your hand to Lombre, remove all Special Condition from Lombre."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Blot",
				'fr-fr': "Pâté",
				'de-de': "Blot"
			},
			effect: {
				'en-us': "Remove 2 damage counters from Lombre.",
				'fr-fr': "Retirez à Lombre 2 marqueurs de dégât.",
				'de-de': "Remove 2 damage counters from Lombre"
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


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86817,
				cardmarket: 276437
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 86817,
				cardmarket: 276437
			},
		},
	],

}

export default card
