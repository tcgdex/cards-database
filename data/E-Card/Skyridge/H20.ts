import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Moltres",
		de: "Lavados"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		146,
	],

	hp: 80,

	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Fire Immunity",
				de: "Feuer-Immunität"
			},
			effect: {
				en: "You can't attach Fire Energy cards from your hand to Moltres.",
				de: "Du kannst keine -Energiekarten aus deiner Hand an Lavados anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Collect Fire",
				de: "Feuersammeln"
			},
			effect: {
				en: "If there are any Energy cards in your discard pile, flip a coin. If heads, attach 1 of them to Moltres.",
				de: "Wenn mindestens eine -Energiekarte in deinem Ablagestapel ist, wirf eine Münze. Lege bei \"Kopf\" eine davon an Lavados an."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Burning Tail",
				de: "Brennender Schweif"
			},
			effect: {
				en: "Flip a coin. If tails, discard a Energy card attached to Moltres.",
				de: "Wirf eine Münze. Lege bei \"Zahl\" eine an Lavados angelegte -Energiekarte auf deinen Ablagestapel."
			},
			damage: 60,

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
			type: "Fighting",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 275230,
		tcgplayer: 87556
	},

	variants: [
		{
			type: 'holo',
		}
	]
}

export default card
