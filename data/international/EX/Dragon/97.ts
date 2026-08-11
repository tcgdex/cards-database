import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Rayquaza ex",
		'fr-fr': "Rayquaza ex",
		'de-de': "Rayquaza ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [384],

	hp: 100,

	stage: "Basic",
	types: [
		"Colorless"
	],

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Spiral Growth",
				'fr-fr': "Croissance en spirale",
				'de-de': "Spiral Growth"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. For each heads, search your discard pile for a basic Energy card and attach it to Rayquaza ex.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez pile. Pour chaque face, cherchez dans votre deck une carte Énergie de base et attachez-la à Rayquaza ex.",
				'de-de': "Flip a coin until you get tails. For each heads, search your descard pile for a Energy card and attach it to Rayquaza ex."
			},

		},
		{
			cost: [
				"Fire",
				"Lightning",
			],
			name: {
				'en-us': "Dragon Burst",
				'fr-fr': "Jet de dragon",
				'de-de': "Dragon Burst"
			},
			effect: {
				'en-us': "Discard either all Fire Energy or all Lightning Energy attached to Rayquaza ex. This attack does 40 damage times the amount of Fire or Lightning Energy discarded.",
				'fr-fr': "Défaussez soit toutes les Énergies  soit toutes les Énergies  attachées à Rayquaza ex. Cette attaque inflige 40 dégâts multipliés par le nombre d'Énergie  ou  défaussées.",
				'de-de': "Discard either all  Energy or all  Energy attached to Rayquaza ex. This attack does 40 damage times the amount of  or  Energy discarded."
			},
			damage: "40×",

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
		{
			type: "Water",
			value: "-30"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88642,
				cardmarket: 275974
			},
		},
		{
			type: "normal",
			stamp: ['chris-fulop'],
			thirdParty: {
				tcgplayer: 477429,
			},
		},
	],

}

export default card
