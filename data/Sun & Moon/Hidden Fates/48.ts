import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Eevee",
		fr: "Évoli",
		de: "Evoli"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	cameoDexIds: [16, 88, 100],

	dexId: [
		133,
	],

	hp: 60,

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
				en: "Curiosity",
				fr: "Curiosité",
				de: "Neugier"
			},
			effect: {
				en: "Your opponent reveals their hand.",
				fr: "Votre adversaire dévoile sa main.",
				de: "Dein Gegner zeigt dir seine Handkarten."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spin Tackle",
				fr: "Charge Tournoyante",
				de: "Dreh-Tackle"
			},
			effect: {
				en: "Flip a coin. If tails, this Pokémon does 10 damage to itself.",
				fr: "Lancez une pièce. Si c’est pile, ce Pokémon s’inflige 10 dégâts.",
				de: "Wirf 1 Münze. Bei Zahl fügt sich dieses Pokémon selbst 10 Schadenspunkte zu."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "The question of why only Eevee has such unstable genes has still not been solved.",
		de: "Evoli ist das einzige Pokémon mit einem höchst instabilen Erbmaterial. Die Ursache dafür ist nach wie vor unklar."
	},

	thirdParty: {
		cardmarket: 394587,
		tcgplayer: 197693
	}
}

export default card
