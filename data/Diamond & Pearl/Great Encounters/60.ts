import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Baltoy",
		fr: "Balbuto",
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
		"Fightning",
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
			},
			effect: {
				en: "If you have less cards in your hand than your opponent, draw cards until you have the same number of cards as your opponent. (If you have more or the same number of cards in your hand as your opponent, this attack does nothing.)",
				fr: "Si vous avez moins de cartes en main que votre adversaire, piochez des cartes jusqu'à ce que vous ayez le même nombre de cartes en main. (Si vous avez plus ou autant de cartes en main que votre adversaire, cette attaque est sans effet.)",
			},

		},
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Spin Turn",
				fr: "Vrille",
			},
			effect: {
				en: "Switch Baltoy with 1 of your Benched Pokémon.",
				fr: "Échangez Balbuto avec 1 de vos Pokémon de Banc.",
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



}

export default card
