import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Pinsir δ",
		fr: "Scarabrute δ",
		de: "Pinsir"
	},

	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		127,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Armor",
				fr: "Armure",
				de: "Rüstung"
			},
			effect: {
				en: "If your opponent has 5 or more cards in his or her hand, any damage done to Pinsir by attacks is reduced by 30 (after applying Weakness and Resistance).",
				fr: "Si votre adversaire possède au moins 5 cartes en main, les dégâts infligés à Scarabrute par des attaques sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
				de: "Wenn dein Gegner 5 oder mehr Karten auf der Hand hat, wird jeder Schaden, der Pinsir durch Angriffe zugefügt wird, um 30 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Delta Call",
				fr: "Appel Delta",
				de: "Delta-Ruf"
			},
			effect: {
				en: "Search your deck for a Pokémon that has δ on its card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck un Pokémon possédant le symbole δ, montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach einem Pokémon, auf dem δ zu sehen ist, zeige es deinem Gegner und nimm es auf die Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Guillotine",
				fr: "Guillotine",
				de: "Guillotine"
			},

			damage: 40,

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
		cardmarket: 277214
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
