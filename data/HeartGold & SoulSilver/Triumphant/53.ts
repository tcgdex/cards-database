import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Weepinbell",
		fr: "Boustiflor",
	},
	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		70,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Bellsprout",
		fr: "Chetiflor",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Poisonpowder",
				fr: "Poudre Toxik",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Corrode Target",
				fr: "Visée corrosive",
			},
			effect: {
				en: "Filp a coin. If heads, look at your opponent’s hand, choose 1 card, and discard it.",
				fr: "Lancez une pièce. Si c'est face, regardez la main de votre adversaire, choisissez une carte et défaussez-la.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
