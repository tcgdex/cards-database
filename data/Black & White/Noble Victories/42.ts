import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Stunfisk",
		fr: "Limonde",
		es: "Stunfisk",
		it: "Stunfisk",
		pt: "Stunfisk",
		de: "Flunschlik"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		618,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mud Shot",
				fr: "Tir de Boue",
				de: "Lehmschuss"
			},

			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thunder",
				fr: "Fatal-Foudre",
				de: "Donner"
			},
			effect: {
				en: "Flip a coin. If tails, this Pokémon does 30 damage to itself.",
				fr: "Lancez une pièce. Si c'est pile, ce Pokémon s'inflige 30 dégâts.",
				de: "Wirf 1 Münze. Bei „Zahl“ fügt sich dieses Pokémon selbst 30 Schadenspunkte zu."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "Its skin is very hard, so it is unhurt even if stepped on by sumo wrestlers. It smiles when transmitting electricity.",
		de: "Dank seiner dicken Haut hält es selbst das Gewicht eines Sumoringers aus. Wenn es Stromschläge verteilt, grinst es."
	},

	thirdParty: {
		cardmarket: 280165,
		tcgplayer: 89579
	}
}

export default card
