import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Cinccino",
		fr: "Pashmilla",
	},
	illustrator: "MAHOU",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		573,
	],
	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Minccino",
		fr: "Chinchidou",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Covet",
				fr: "Implore",
			},
			effect: {
				en: "Your opponent reveals his or her hand. Choose a card you find there and put it on the bottom of your opponent’s deck.",
				fr: "Votre adversaire montre sa main. Choisissez une carte que vous y trouvez et mettez-la en dessous du deck de votre adversaire.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Last Resort",
				fr: "Dernier Recours",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			},
			damage: 60,

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
