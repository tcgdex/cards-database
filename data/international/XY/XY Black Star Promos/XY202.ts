import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu"
	},

	illustrator: "Ken Sugimori",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		25,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Charge",
				'fr-fr': "Chargeur"
			},
			effect: {
				'en-us': "Search your deck for a Lightning Energy card and attach it to this Pokémon. Shuffle your deck afterward.",
				'fr-fr': "Cherchez une carte Énergie  dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck."
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Thunderbolt",
				'fr-fr': "Tonnerre"
			},
			effect: {
				'en-us': "Discard all Energy attached to this Pokémon.",
				'fr-fr': "Défaussez toutes les Énergies attachées à ce Pokémon."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
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
		'en-us': "When several of these Pokémon gather, their electricity can build and cause lightning storms.",
	},

	thirdParty: {
		cardmarket: 289809
	}
}

export default card
