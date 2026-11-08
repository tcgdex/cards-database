import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Weepinbell",
		'fr-fr': "Boustiflor",
		'de-de': "Ultrigaria"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [70],

	hp: 80,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Bellsprout",
		'fr-fr': "Chetiflor"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Poisonpowder",
				'fr-fr': "Poudre Toxik",
				'de-de': "Giftpuder"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Das Verteidigende Pokémon ist jetzt vergiftet."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Corrode Target",
				'fr-fr': "Visée corrosive",
				'de-de': "Ziel korrodieren"
			},
			effect: {
				'en-us': "Flip a coin. If heads, look at your opponent's hand, choose 1 card, and discard it.",
				'fr-fr': "Lancez une pièce. Si c’est face, regardez la main de votre adversaire, choisissez une carte et défaussez-la.",
				'de-de': "Wirf eine Münze. Schau dir bei \"Kopf\" die Handkarten deines Gegners an, wähle 1 davon und lege sie auf seinen Ablagestapel."
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
		'en-us': "Even though it is filled with acid, it does not melt because it also oozes a protective fluid."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90555,
				cardmarket: 279583
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279583,
				tcgplayer: 90555
			}
		},
	],

}

export default card
