import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Wurmple",
		fr: "Chenipotte",
		de: "Waumpel"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [265],

	hp: 50,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Ram",
				fr: "Collision",
				de: "Ramme"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Poison Sting",
				fr: "Dard-venin",
				de: "Giftstachel"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt vergiftet."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		en: "Often targeted by bird Pokémon, it desperately resists by releasing poison from its tail spikes.",
		de: "Es wird oft von Vogel-Pokémon angegriffen, wehrt sich aber mit Gift aus seinen Schwanzspitzen."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 90652,
				cardmarket: 278524
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278524,
				tcgplayer: 90652
			}
		}
	],

}

export default card
