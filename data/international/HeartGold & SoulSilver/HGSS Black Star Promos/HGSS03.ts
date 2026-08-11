import { Card } from 'models/database/card'
import Set from '../HGSS Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu"
	},
	illustrator: "Kanako Eo",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [25],
	hp: 70,
	types: [
		"Lightning"
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Recharge",
				'fr-fr': "Recharge"
			},
			effect: {
				'en-us': "Flip a coin. If heads, search your deck for a Lightning Energy card and attach it to Pikachu. Shuffle your deck afterward.",
				'fr-fr': "Lancez une pièce. Si c'est face, cherchez une carte Énergie  dans votre deck et attachez-la à Pikachu. Mélangez ensuite votre deck."
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Thunderbolt",
				'fr-fr': "Tonnerre"
			},
			effect: {
				'en-us': "Discard all Energy attached to Pikachu.",
				'fr-fr': "Défaussez toutes les cartes Énergie attachées à Pikachu."
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It occasionally uses an electric shock to recharge a fellow Pikachu that is in a weakened state."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275610,
				tcgplayer: 88098
			}
		},
	],

}

export default card
