import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Omastar",
		'de-de': "Amoroso"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [139],

	hp: 90,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Omanyte",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Primal Stare",
				'de-de': "Ursprüngliche Starre"
			},
			effect: {
				'en-us': "As long as Omastar is your Active Pokémon, your opponent can't play Basic Pokémon or Evolution cards from his or her hand to evolve his or her Active Pokémon.",
				'de-de': "Solange Amoroso dein aktives Pokémon ist, kann dein Gegner keinen Basis- Pokémon oder Entwicklungskarte aus seine Hand spielen, um sein aktives Pokémon zu entwickeln."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Spook",
				'de-de': "Herumgeistern"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'de-de': "Das verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 87864,
				cardmarket: 275281
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 87864,
				cardmarket: 275281
			},
		},
	],
}

export default card
