import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Drifloon",
		fr: "Baudrive",
		de: "Driftlon"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		425,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Minimize",
				fr: "Lilliput",
				de: "Komprimator"
			},
			effect: {
				en: "During your opponent’s next turn, any damage done to Drifloon by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Tous les dégâts infligés à Baudrive par des attaques pendant le prochain tour de votre adversaire sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				de: "Während des nächsten Zuges deines Gegners wird Schaden, der Driftlon durch Angriffe zugefügt wird, um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden.)"
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Pull",
				fr: "Tirer",
				de: "Ziehen"
			},
			effect: {
				en: "Flip a coin. If heads, switch the Defending Pokémon with 1 of your opponent’s Benched Pokémon.",
				fr: "Lancez une pièce. Si c’est face, échangez le Pokémon Défenseur avec un Pokémon de Banc de votre adversaire.",
				de: "Wirf eine Münze. Tausche bei \"Kopf\" das Verteidigende Pokémon gegen 1 Pokémon auf der Bank deines Gegners aus."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
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
		en: "It is whispered that any child who mistakes Drifloon for a balloon and holds on to it could wind up missing."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279299,
		tcgplayer: 84960
	}
}

export default card
