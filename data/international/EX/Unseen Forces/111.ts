import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Tyranitar ex",
		'fr-fr': "Tyranocif ex",
		'de-de': "Despotar ex"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		248,
	],

	hp: 160,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Pupitar",
		'fr-fr': "Ymphect"
	},

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Shatter",
				'fr-fr': "Fracasser",
				'de-de': "Shatter"
			},
			effect: {
				'en-us': "Discard any Stadium card in play.",
				'fr-fr': "Défaussez n'importe quelle carte Stade en jeu.",
				'de-de': "Discard any Stadium card in play."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Derail",
				'fr-fr': "Dérailler",
				'de-de': "Derail"
			},
			effect: {
				'en-us': "Discard a Special Energy card, if any, attached to the Defending Pokémon.",
				'fr-fr': "Défaussez une carte Énergie spéciale attachée au Pokémon Défenseur, s'il en a.",
				'de-de': "Discard a Special Energy card, if any, attached to the Defending Pokémon."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Mix-Up",
				'fr-fr': "Mélange",
				'de-de': "Mix-Up"
			},
			effect: {
				'en-us': "Your opponent discards the top card of his or her deck.",
				'fr-fr': "Votre adversaire défausse la carte du dessus de son deck.",
				'de-de': "Your opponent discards the top card of his or her deck."
			},
			damage: 70,

		},
		{
			cost: [
				"Fighting",
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Losing Control",
				'fr-fr': "Perdre contrôle",
				'de-de': "Losing Control"
			},
			effect: {
				'en-us': "Discard the top 3 cards of your deck.",
				'fr-fr': "Défaussez les 3 cartes du dessus de votre deck.",
				'de-de': "Discard the top 3 cards of your deck."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	
	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 90125,
				cardmarket: 276757
			},
		},
	],
}

export default card
