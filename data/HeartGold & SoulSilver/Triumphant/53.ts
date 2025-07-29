import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Weepinbell",
		fr: "Boustiflor",
		de: "Ultrigaria"
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
				de: "Giftpuder"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Das Verteidigende Pokémon ist jetzt vergiftet."
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
				de: "Ziel korrodieren"
			},
			effect: {
				en: "Filp a coin. If heads, look at your opponent’s hand, choose 1 card, and discard it.",
				fr: "Lancez une pièce. Si c’est face, regardez la main de votre adversaire, choisissez une carte et défaussez-la.",
				de: "Wirf eine Münze. Schau dir bei \"Kopf\" die Handkarten deines Gegners an, wähle 1 davon und lege sie auf seinen Ablagestapel."
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

	description: {
		en: "Even though it is filled with acid, it does not melt because it also oozes a protective fluid."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279583
	}
}

export default card
