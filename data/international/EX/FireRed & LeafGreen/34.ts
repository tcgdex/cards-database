import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Haunter",
		'fr-fr': "Spectrum",
		'de-de': "Alpollo"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		93,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Gastly",
		'fr-fr': "Fantominus"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Head Trip",
				'fr-fr': "La tête la première",
				'de-de': "Head Trip"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if Haunter is on your Bench, you may use this power. One of your Active Pokémon is now Confused.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez utiliser ce pouvoir si Spectrum est sur votre Banc. Un de vos Pokémon Actifs est maintenant Confus.",
				'de-de': "Once during your turn (before your attack), if Haunter is on your Bench, you may use this power. One of your Active Pokémon is now Confused."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Confuse Ray",
				'fr-fr': "Onde folie",
				'de-de': "Confuse Ray"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez utiliser ce pouvoir si Spectrum est sur votre Banc. Un de vos Pokémon Actifs est maintenant Confus.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Confused."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276210,
				tcgplayer: 86025
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276210,
				tcgplayer: 86025
			},
		}
	]
}

export default card
