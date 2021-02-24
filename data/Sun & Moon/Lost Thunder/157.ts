import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Smeargle",
		fr: "Queulorior",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		235,
	],
	hp: 80,
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
				en: "Stunning Likeness",
				fr: "Ressemblance Frappante",
			},
			effect: {
				en: "Your opponent reveals their hand. You may use the effect of a Supporter card you find there as the effect of this attack.",
				fr: "Votre adversaire dévoile sa main. Vous pouvez utiliser l’effet d’une carte Supporter que vous y trouvez en tant qu’effet de cette attaque.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tail Smash",
				fr: "Éclate-Queue",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
			},
			damage: 30,

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
