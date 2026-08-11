import { Card } from 'models/database/card'
import Set from '../POP Series 1'

const card: Card = {
	name: {
		'en-us': "Metagross",
		'fr-fr': "Metalosse"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [376],

	hp: 100,

	types: [
		"Metal"
	],

	evolveFrom: {
		'en-us': "Metang",
		'fr-fr': "Métang"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Metal Claw",
				'fr-fr': "Griffe acier"
			},

			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hyper Beam",
				'fr-fr': "Ultralaser"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard 1 Energy attached to the Defending Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez 1 Énergie attachée au Pokémon Défenseur."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 3,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87336,
				cardmarket: 277416
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87336,
				cardmarket: 277416
			},
		},
	],

}

export default card
