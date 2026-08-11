import { Card } from 'models/database/card'
import Set from '../Dragon Vault'

const card: Card = {
	name: {
		'en-us': "Dragonite",
		'fr-fr': "Dracolosse",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		149,
	],

	hp: 150,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Dragonair",
		'fr-fr': "Draco",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hyper Beam",
				'fr-fr': "Ultralaser",
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy attached to the Defending Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Défenseur.",
			},
			damage: 50,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hurricane Tail",
				'fr-fr': "Bourrasqueue",
			},
			effect: {
				'en-us': "Flip 4 coins. This attack does 60 damage times the number of heads.",
				'fr-fr': "Lancez 4 pièces. Cette attaque inflige 60 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It is said to make its home somewhere in the sea. It guides crews of shipwrecks to shore.",
	},

	thirdParty: {
		cardmarket: 281005,
		tcgplayer: 84915
	}
}

export default card
