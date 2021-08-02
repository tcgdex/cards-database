import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Ambipom",
		fr: "Capidextre",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		424,
	],
	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Aipom",
		fr: "Capumain",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Furry Chance",
				fr: "Chance Fourrure",
			},
			effect: {
				en: "Discard the top card of your opponent’s deck. If that card is an Energy card, this attack does 60 more damage.",
				fr: "Défaussez la carte du dessus du deck de votre adversaire. Si c’est une carte Énergie, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: "20+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Hit",
				fr: "Coup Double",
			},
			effect: {
				en: "Flip 2 coins. This attack does 50 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
			},
			damage: "50×",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
