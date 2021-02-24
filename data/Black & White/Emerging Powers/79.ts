import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Watchog",
		fr: "Miradar",
	},
	illustrator: "MAHOU",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		505,
	],
	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Patrat",
		fr: "Ratentif",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Watcheck",
				fr: "Contrôle Radar",
			},
			effect: {
				en: "Look at the top 5 cards of your opponent's deck and put them back on top of his or her deck in any order.",
				fr: "Regardez les 5 cartes du dessus du deck de votre adversaire et replacez-les sur le dessus de son deck dans l'ordre de votre choix.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quick Tail Smash",
				fr: "Rapid'Claqueue",
			},
			effect: {
				en: "Before doing damage, you may flip a coin. If heads, this attack does 60 more damage. If tails, this attack does nothing.",
				fr: "Avant d'infliger des dégâts, vous pouvez lancer une pièce. Si c'est face, cette attaque inflige 60 dégâts supplémentaires. Si c'est pile, cette attaque ne fait rien.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
