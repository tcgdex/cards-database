import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Cloyster",
		'fr-fr': "Crustabri",
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		91,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Shellder",
		'fr-fr': "Kokiyas",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Clamp Crush",
				'fr-fr': "Pince Broyeuse",
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed and discard an Energy attached to that Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé, et vous défaussez une Énergie lui étant attachée.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Spike Cannon",
				'fr-fr': "Picanon",
			},
			effect: {
				'en-us': "Flip 5 coins. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez 5 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Cloyster that live in seas with harsh tidal currents grow large, sharp spikes on their shells.",
	},

	thirdParty: {
		cardmarket: 288460,
		tcgplayer: 113678
	}
}

export default card
