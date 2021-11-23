import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Misdreavus",
		fr: "Feuforeve",
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		200,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Show Off",
				fr: "Crâneur",
			},
			effect: {
				en: "Search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck une carte Énergie de base, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Payback",
				fr: "Représailles",
			},
			effect: {
				en: "If your opponent has only 1 Prize card left, this attack does 10 damage plus 20 more damage.",
				fr: "S'il ne reste à votre adversaire qu'1 carte Récompense, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires.",
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		fr: "Il adore se faufiler derrière les gens la nuit pour les effrayer avec son cri strident."
	}
}

export default card
