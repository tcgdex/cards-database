import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Wurmple",
		fr: "Chenipotte",
		de: "Waumpel"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		265,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Signs of Evolution",
				fr: "Signes d'évolution",
				de: "Spuren der Evolution"
			},
			effect: {
				en: "Search your deck for Silcoon and Beautifly, or Cascoon and Dustox cards. Show 1 card or both cards of a pair to your opponent and put them into your hand. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck les Pokémon Armulys et Charmillon ou Blindalys et Papinox. Montrez à votre adversaire la ou les cartes composant une paire et placez-les dans votre main. Mélangez ensuite votre deck.",
				de: "Durchsuche dein Deck nach Schaloko oder Papinella oder Panekon und Pudox. Zeige deinem Gegner 1 oder beide Karten des gewählten Paars und nimm sie auf deine Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Poison Barb",
				fr: "Barbelés empoisonnés",
				de: "Giftdorn"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Das verteidigende Pokémon ist jetzt vergiftet."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 275726,
		tcgplayer: 90647
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
	]
}

export default card
