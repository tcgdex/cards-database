import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Lombre",
		fr: "Lombre",
		de: "Lombrero"
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
		en: "Lotad",
		fr: "Nénupiot"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Natural Cure",
				fr: "Guérison naturelle",
				de: "Natural Cure"
			},
			effect: {
				en: "When you attach a Water Energy card from your hand to Lombre, remove all Special Conditions from Lombre.",
				fr: "Lorsque vous attachez une carte Énergie  de votre main à Lombre, retirez-lui tous ses États Spéciaux.",
				de: "When you attach a  Energy card from your hand to Lombre, remove all Special Condition from Lombre."
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
				en: "Blot",
				fr: "Pâté",
				de: "Blot"
			},
			effect: {
				en: "Remove 2 damage counters from Lombre.",
				fr: "Retirez à Lombre 2 marqueurs de dégât.",
				de: "Remove 2 damage counters from Lombre"
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

	thirdParty: {
		tcgplayer: 86817,
		cardmarket: 276436
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
