import { Card } from 'models/database/card'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Zekrom-EX",
		'fr-fr': "Zekrom ex",
	},
	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		644,
	],
	hp: 180,
	types: [
		"Lightning",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Glinting Claw",
				'fr-fr': "Griffe Scintillante",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: 50,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Strong Volt",
				'fr-fr': "Décharge Foudroyante",
			},
			effect: {
				'en-us': "Discard 2 Energy attached to this Pokémon.",
				'fr-fr': "Défaussez 2 Énergies attachées à ce Pokémon.",
			},
			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
