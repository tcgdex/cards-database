import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Pyroar",
		'fr-fr': "Némélios",
	},

	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		668,
	],

	hp: 100,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Litleo",
		'fr-fr': "Hélionceau",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Crunch",
				'fr-fr': "Mâchouille",
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Royal Flare",
				'fr-fr': "Flamme Royale",
			},
			effect: {
				'en-us': "Discard 2 Energy attached to this Pokémon.",
				'fr-fr': "Défaussez 2 Énergies attachées à ce Pokémon.",
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The male with the largest mane of fire is the leader of the pride.",
	},

	thirdParty: {
		cardmarket: 281313
	}
}

export default card
