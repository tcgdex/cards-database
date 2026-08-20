import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Lombre",
		fr: "Lombre",
		de: "Lombrero"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [271],

	hp: 80,

	types: [
		"Grass"
	],

	evolveFrom: {
		en: "Lotad",
		fr: "Nénupiot",
		de: "Loturzel"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Interrupt",
				fr: "Interruption",
				de: "Stören"
			},
			effect: {
				en: "Flip a coin. If heads, look at your opponent's hand and choose 1 card, then have your opponent shuffle that card into his or her deck.",
				fr: "Lancez une pièce. Si c'est face, regardez la main de votre adversaire et choisissez-y une carte. Ensuite, demandez à votre adversaire de la mélanger à son deck.",
				de: "Wirf 1 Münze. Bei „Kopf“ schau dir die Handkarten deines Gegners an und wähle 1 davon. Dein Gegner mischt die gewählte Karte in sein Deck."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gentle Slap",
				fr: "Gifle douce",
				de: "Sanfter Hieb"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		en: "It has a mischievous spirit. If it spots an angler, it will tug on the fishing line to interfere.",
		de: "Es hat ein spitzbübisches Wesen. Sieht es einen Angler, zieht es an der Angelschnur, um ihn zu ärgern."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 86820,
				cardmarket: 278473
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278473,
				tcgplayer: 86820
			}
		}
	],

}

export default card
