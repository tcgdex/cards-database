import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Sandshrew",
		fr: "Sabelette",
		de: "Sandan"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		27,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Defense Curl",
				fr: "Boul’armure",
				de: "Einigler"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all damage done to Sandshrew by attacks during your opponent’s next turn.",
				fr: "Lancez une pièce. Si c’est face, évitez tous les dégâts infligés à Sabelette par des attaques pendant le prochain tour de votre adversaire.",
				de: "Wirf eine Münze. Bei \"Kopf\" verhindere alle Schadenspunkte, die Sandan während des nächsten Zuges deines Gegners durch Angriff zugefügt werden."
			},

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Rollout",
				fr: "Roulade",
				de: "Walzer"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "Disliking water, it lives in deep burrows in arid areas. It can roll itself instantly into a ball."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279051,
		tcgplayer: 88926
	}
}

export default card
