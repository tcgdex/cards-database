import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Baltoy",
		fr: "Balbuto",
		de: "Puppance"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		343,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Psychic Balance",
				fr: "Équilibre psy",
				de: "Psycho-Ausgleich"
			},
			effect: {
				en: "If you have less cards in your hand than your opponent, draw cards until you have the same number of cards as your opponent. (If you have more or the same number of cards in your hand as your opponent, this attack does nothing.)",
				fr: "Si vous avez moins de cartes en main que votre adversaire, piochez des cartes jusqu'à ce que vous ayez le même nombre de cartes en main. (Si vous avez plus ou autant de cartes en main que votre adversaire, cette attaque est sans effet.)",
				de: "Wenn du weniger Karten auf der Hand hast als dein Gegner, ziehe so viele Karten von deinem Deck, bis du die gleiche Anzahl Karten auf der Hand hast wie dein Gegner. (Dieser Angriff hat keine Auswirkungen, wenn du nicht weniger Karten auf der Hand hast als dein Gegner.)"
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Spin Turn",
				fr: "Vrille",
				de: "Absatzdreher"
			},
			effect: {
				en: "Switch Baltoy with 1 of your Benched Pokémon.",
				fr: "Échangez Balbuto avec 1 de vos Pokémon de Banc.",
				de: "Tausche Puppance gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+10"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 277962,
		tcgplayer: 83716
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["dylan-lefavour"]
		},
		{
			type: "normal",
			stamp: ["jason-klaczynski"]
		},
		{
			type: "normal",
			stamp: ["stephen-silvestro"]
		},
		{
			type: "normal",
			stamp: ["jason-martinez"]
		},
		{
			type: "normal",
			stamp: ["david-cohen"]
		},
		{
			type: "normal",
			stamp: ["yuka-furusawa"]
		}
	]
}

export default card
