import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Croconaw",
		'fr-fr': "Crocodil",
		'de-de': "Tyracroc"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [159],

	hp: 80,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Totodile",
		'fr-fr': "Kaiminus"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Wave Splash",
				'fr-fr': "Grosse vague",
				'de-de': "Wellenplatscher"
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Big Bite",
				'fr-fr': "Grosse morsure",
				'de-de': "Mächtiger Biss"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite durant le prochain tour de votre adversaire.",
				'de-de': "Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "If it loses a fang, a new one grows back in its place. There are always 48 fangs lining its mouth."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84500,
				cardmarket: 279010
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84500,
				cardmarket: 279010
			}
		},
	],

}

export default card
