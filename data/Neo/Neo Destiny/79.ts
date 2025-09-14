import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Psyduck",
		fr: "Psykokwak",
		de: "Enton"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		54,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Flipper Splash",
				fr: "Koud'palme",
				de: "Flipper Splash"
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Migraine",
				fr: "Maud'krâne",
				de: "Migraine"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused. If tails, Psyduck is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus. Si c'est pile, Psykokwak est maintenant Confus.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Confused. If tails, Psyduck is now Confused."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		fr: "Bien que possédant d'immenses pouvoirs mentaux, il ne sait pas les utiliser."
	},

	thirdParty: {
		cardmarket: 274731,
		tcgplayer: 88433
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		}
	]
}

export default card
