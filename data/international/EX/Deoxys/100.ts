import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Hariyama ex",
		'fr-fr': "Hariyama ex",
		'de-de': "Hariyama ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		297,
	],

	hp: 110,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Makuhita",
		'fr-fr': "Makuhita"
	},

	suffix: "ex",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Commanding Aura",
				'fr-fr': "Aura autoritaire",
				'de-de': "Commanding Aura"
			},
			effect: {
				'en-us': "As long as Hariyama ex is your Active Pokémon, your opponent can't play any Stadium cards from his or her hand.",
				'fr-fr': "Tant qu'Hariyama ex est votre Pokémon Actif, votre adversaire ne peut plus jouer de carte Stade de sa main.",
				'de-de': "As long as Hariyama ex is your Active Pokémon, your opponent can't play any Stadium cards from his or her hand."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Knock Off",
				'fr-fr': "Sabotage",
				'de-de': "Knock Off"
			},
			effect: {
				'en-us': "Choose 1 card from your opponent's hand without looking and discard it.",
				'fr-fr': "Choisissez 1 carte de la main de votre adversaire sans regarder et défaussez-la.",
				'de-de': "Choose 1 card from your opponent's hand without looking and discard it."
			},
			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Pivot Throw",
				'fr-fr': "Lancer tournant",
				'de-de': "Pivot Throw"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done to Hariyama ex by attacks is increased by 10 (before applying Weakness and Resistance).",
				'fr-fr': "Lors du prochain tour de votre adversaire, tous dégâts infligés à Hariyama ex par des attaques sont augmentés de 10 (avant application de la Faiblesse et de la Résistance).",
				'de-de': "During your opponent's next turn, any damage done to Hariyama ex by attacks is increased by 10 (before applying Weakness and Resistance)."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 86018,
				cardmarket: 276503
			},
		},
	],

}

export default card
