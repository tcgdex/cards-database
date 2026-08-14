import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Buizel",
		fr: "Mustébouée",
		es: "Buizel",
		it: "Buizel",
		pt: "Buizel",
		de: "Bamelin"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		418,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Wave Splash",
				fr: "Grosse Vague",
				de: "Wellenplatscher"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "It spins its two tails like a screw to propel itself through the water. The tails also slice clinging seaweed.",
		de: "Dreht seine zwei Schweife wie eine Schraube, um schnell zu schwimmen, und zum Zerschneiden von Algen."
	},

	thirdParty: {
		cardmarket: 280471,
		tcgplayer: 84023
	}
}

export default card
