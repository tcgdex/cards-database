import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Aipom",
		fr: "Capumain",
		de: "Griffel"
	},

	illustrator: "Hironobu Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		190,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Pilfer",
				fr: "Chapardage",
				de: "Stibitzen"
			},
			effect: {
				en: "Shuffle Aipom and all cards attached to it into your deck. Flip a coin. If heads, shuffle a card from your discard pile into your deck.",
				fr: "Mélangez Capumain et toutes les cartes qui lui sont attachées dans votre deck. Lancez une pièce. Si c'est face, mélangez une carte de votre pile de défausse dans votre deck.",
				de: "Mische Griffel und alle daran angelegten Karten zurück in dein Deck. Wirf eine Münze. Mische bei 'Kopf' eine Karte aus deinem Ablagestapel in dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tail Rap",
				fr: "Frap'keu",
				de: "Schweifklopfen"
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				de: "Wirf zwei Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl 'Kopf' zu."
			},
			damage: "10x",

		},
	],

	weaknesses: [
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

	description: {
		fr: "Sa queue est si puissante qu'il peut s'en servir pour attraper une branche d'arbre et se suspendre en l'air."
	},

	thirdParty: {
		cardmarket: 274426,
		tcgplayer: 83485
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
