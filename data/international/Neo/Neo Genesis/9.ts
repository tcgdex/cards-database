import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Lugia",
		'fr-fr': "Lugia",
		'de-de': "Lugia"
	},

	illustrator: "Hironobu Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		249,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Water",
				"Lightning",
			],
			name: {
				'en-us': "Elemental Blast",
				'fr-fr': "Explosion élémentaire",
				'de-de': "Urgewalteexplosion"
			},
			effect: {
				'en-us': "Discard a Energy card, a Energy card, and a Energy card attached to Lugia in order to use this attack.",
				'fr-fr': "Défaussez une carte Énergie , une carte Énergie  et une carte Énergie  attachées à Lugia pour pouvoir utiliser cette attaque.",
				'de-de': "Lege eine -Energiekarte, eine -Energiekarte und eine -Energiekarte ab, die an Lugia angelegt sind, um diesen Angriff zu verwenden."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 2,


	description: {
		'en-us': "It is said that it quietly spends its time deep at the bottom of the sea, because its powers are too strong.",
		'fr-fr': "On prétend qu'il passe le plus clair de son temps au fond des mers, car ses pouvoirs sont trop puissants."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274409,
				tcgplayer: 86903
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274409,
				tcgplayer: 86903
			}
		}
	]
}

export default card
