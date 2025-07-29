import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Hoothoot",
		de: "Hoothoot"
	},

	illustrator: "Hizuki Misono",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		163,
	],

	hp: 40,

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
				en: "Hypnosis",
				de: "Hypnose"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				de: "Das verteidigende Pokémon schläft jetzt."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Eerie Light",
				de: "Schauriges Licht"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				de: "Wirf eine Münze. Bei \"Kopf\" ist das verteidigende Pokémon jetzt verwirrt."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 275323
	}
}

export default card
