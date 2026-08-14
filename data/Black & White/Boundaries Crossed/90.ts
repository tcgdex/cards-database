import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Purrloin",
		fr: "Chacripan",
		es: "Purrloin",
		it: "Purrloin",
		pt: "Purrloin",
		de: "Felilou"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		509,
	],

	hp: 50,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Captivate",
				fr: "Séduction",
				de: "Liebreiz"
			},
			effect: {
				en: "Flip a coin. If heads, switch 1 of your opponent's Benched Pokémon with the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, échangez le Pokémon Défenseur avec 1 des Pokémon de Banc de votre adversaire.",
				de: "Wirf 1 Münze. Tausche bei „Kopf“ das Verteidigende Pokémon gegen 1 Pokémon auf der Bank deines Gegners aus."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "Their cute act is a ruse. They trick people and steal their valuables just to see the looks on their faces.",
		de: "Lenkt Leute mit seinem süßen Verhalten ab und stiehlt ihnen ihr Hab und Gut, nur um ihren verdutzten Blick zu sehen."
	},

	thirdParty: {
		cardmarket: 280677,
		tcgplayer: 88459
	}
}

export default card
