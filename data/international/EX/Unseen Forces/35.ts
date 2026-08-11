import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Bayleef",
		'fr-fr': "Macronium",
		'de-de': "Lorblatt"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		153,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Chikorita",
		'fr-fr': "Germignon"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Soothing Scent",
				'fr-fr': "Senteur apaisante",
				'de-de': "Soothing Scent"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "The Defending Pokémon is now Asleep."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Razor Leaf",
				'fr-fr': "Tranch'herbe",
				'de-de': "Razor Leaf"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83746,
				cardmarket: 276681
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 83746,
				cardmarket: 276681
			},
		},
		{
			type: "normal",
			stamp: ["pre-release"],
			thirdParty: {
				tcgplayer: 232876,
				cardmarket: 882856
			},
		}
	],
}

export default card
