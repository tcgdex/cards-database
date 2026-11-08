import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Golduck",
		'fr-fr': "Akwakwak",
		'de-de': "Entoron"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [55],

	hp: 70,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Psyduck",
		'fr-fr': "Psykokwak"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'de-de': "Schlitzer"
			},

			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Distortion Beam",
				'fr-fr': "Rayon de distorsion",
				'de-de': "Verdrehstrahl"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Asleep. If tails, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi. Si c'est pile, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' schläft das Verteidigende Pokémon jetzt. Bei 'Zahl' ist das Verteidigende Pokémon jetzt verwirrt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 85813,
				cardmarket: 275122
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 85813,
				cardmarket: 275122
			}
		},
	]
}

export default card
