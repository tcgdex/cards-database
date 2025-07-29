import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Shellos West Sea",
		fr: "Sancoki Mer Occident Niv. 27",
		de: "Schalellos Westliches Meer"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		422,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Healing Sea",
				fr: "Mer guérisseuse",
				de: "Heilendes Meer"
			},
			effect: {
				en: "Flip 2 coins. Choose 1 of your Pokémon. For each heads, remove 1 damage counter from that Pokémon.",
				fr: "Lancez 2 pièces. Choisissez 1 de vos Pokémon. Pour chaque face, retirez-lui 1 marqueur de dégât.",
				de: "Wirf 2 Münzen. Wähle 1 deiner Pokémon. Entferne pro \"Kopf\" 1 Schadensmarke vom gewählten Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mud Shot",
				fr: "Tir de boue",
				de: "Lehmschuss"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 278654
	}
}

export default card
