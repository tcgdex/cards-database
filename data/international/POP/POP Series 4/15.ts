import { Card } from 'models/database/card'
import Set from '../POP Series 4'

const card: Card = {
	name: {
		'en-us': "Treecko δ",
		'fr-fr': "Arcko δ"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [252],

	hp: 40,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Pound",
				'fr-fr': "Écras'face"
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Shining Claws",
				'fr-fr': "Griffes étincelantes"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90045,
				cardmarket: 277480
			},
		},
	],

}

export default card
