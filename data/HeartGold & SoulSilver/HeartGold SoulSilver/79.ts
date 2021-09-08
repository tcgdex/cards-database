import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Sandshrew",
		fr: "Sabelette",
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
			},
			effect: {
				en: "Flip a coin. If heads, prevent all damage done to Sandshrew by attacks during your opponent’s next turn.",
				fr: "Lancez une pièce. Si c’est face, évitez tous les dégâts infligés à Sabelette par des attaques pendant le prochain tour de votre adversaire.",
			},

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Rollout",
				fr: "Roulade",
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



}

export default card
