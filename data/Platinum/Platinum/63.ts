import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Silcoon",
		fr: "Armulys",
		de: "Schaloko"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [266],

	hp: 80,

	types: [
		"Grass"
	],

	evolveFrom: {
		en: "Wurmple",
		fr: "Chenipotte",
		de: "Waumpel"
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				en: "Ascension",
				fr: "Ascension",
				de: "Aufstieg"
			},
			effect: {
				en: "Search your deck for a card that evolves from Silcoon and put it onto Silcoon. (This counts as evolving Silcoon.) Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck une carte qui évolue d'Armulys et placez-la sur Armulys. (Vous le faites ainsi évoluer.) Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach einer Karte, die sich aus Schaloko entwickelt, und lege diese auf Schaloko. (Dies zählt als Entwickeln von Schaloko.) Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Sticky String",
				fr: "Ficelle collante",
				de: "Klebfaden"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 2,

	description: {
		en: "It wraps silk around the branches of a tree. It drinks rainwater on its silk while awaiting evolution.",
		de: "Es bindet sich mit Seide an Äste und trinkt Regenwasser, während es starr auf seine Entwicklung wartet."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 89213,
				cardmarket: 278484
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278484,
				tcgplayer: 89213
			}
		}
	],

}

export default card
