import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Lickitung",
		fr: "Excelangue",
		de: "Schlurp"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [108],

	hp: 90,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Stretch Tongue",
				fr: "Langue à rallonge",
				de: "Streckzunge"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 10 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				de: "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 10 Schadenspunkte zu. Der Schaden dieses Angriffs wird durch Schwäche und Resistenz nicht verändert."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Knock Off",
				fr: "Sabotage",
				de: "Abschlag"
			},
			effect: {
				en: "Choose 1 card from your opponent's hand without looking and discard it.",
				fr: "Choisissez sans regarder une carte de la main de votre adversaire et défaussez-la.",
				de: "Wähle 1 Karte von der Hand deines Gegners (ohne sie vorher anzusehen) und lege sie auf seinen Ablagestapel."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 3,

	description: {
		en: "When it extends its over-six-foot-long tongue, its tail quivers. There is a possibility they are connected.",
		de: "Streckt es seine ca. zwei Meter lange Zunge, zittert sein Schweif. Sie scheinen verbunden zu sein."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 86722,
				cardmarket: 278501
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278501,
				tcgplayer: 86722
			}
		}
	],

}

export default card
