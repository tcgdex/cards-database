import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Absol",
		'fr-fr': "Absol",
		'de-de': "Absol"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [359],

	hp: 70,

	types: [
		"Darkness"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Bad News",
				'fr-fr': "Mauvaises nouvelles",
				'de-de': "Bad News"
			},
			effect: {
				'en-us': "If the number of cards in your opponent's hand is at least 6, choose a number of cards there, without looking, until your opponent has 5 cards left. Have your opponent discard the cards you chose.",
				'fr-fr': "Si votre adversaire a au moins six cartes en main, choisissez sans regarder suffisamment de cartes pour qu'il ne lui reste plus que cinq cartes. Votre adversaire défausse les cartes que vous avez choisi.",
				'de-de': "If the number of cards in your opponent's hand is at least 6, choose a number of cards there, without looking, until your opponent has 5 cards left. Have your opponent discard the cards you chose."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Prize Count",
				'fr-fr': "Compteur de Récompense",
				'de-de': "Prize Count"
			},
			effect: {
				'en-us': "If you have more Prize cards left than your opponent, this attack does 20 damage plus 20 more damage.",
				'fr-fr': "S'il vous reste plus de cartes Récompense que votre adversaire, cette attaque inflige 40 dégâts.",
				'de-de': "If you have more Prize cards left than your opponent, this attack does 20 damage plus 20 more damage."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 83449,
				cardmarket: 275878
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 83449,
				cardmarket: 275878
			},
		},
	],

}

export default card
