import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "M Blastoise EX",
		'fr-fr': "M-Tortank-EX",
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		9,
	],

	hp: 220,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Blastoise-EX",
		'fr-fr': "Tortank-EX",
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dread Launcher",
				'fr-fr': "Lanceur d'Effroi",
			},
			effect: {
				'en-us': "Flip a coin. If tails, discard 2 Water Energy attached to this Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est pile, défaussez 2 Énergies Water attachées à ce Pokémon.",
			},
			damage: 180,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		tcgplayer: 113676
	}
}

export default card
