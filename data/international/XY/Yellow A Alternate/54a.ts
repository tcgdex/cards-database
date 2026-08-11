import { Card } from 'models/database/card'
import Set from '../Yellow A Alternate'

const card: Card = {
	name: {
		'en-us': "Zygarde-EX",
		'fr-fr': "Zygarde-ex",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	dexId: [718],
	set: Set,

	hp: 190,
	types: [
		"Fighting",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Land’s Pulse",
				'fr-fr': "Vibration Terrestre",
			},
			effect: {
				'en-us': "If there is any Stadium card in play, this attack does 20 more damage.",
				'fr-fr': "S'il y a une carte Stade en jeu, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: "20+",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Cell Storm",
				'fr-fr': "Tempête Cellulaire",
			},
			effect: {
				'en-us': "Heal 30 damage from this Pokémon.",
				'fr-fr': "Soignez 30 dégâts à ce Pokémon.",
			},
			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Land's Wrath",
				'fr-fr': "Force Chtonienne",
			},

			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
