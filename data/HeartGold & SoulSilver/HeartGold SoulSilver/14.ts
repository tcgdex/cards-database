import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Ampharos",
		fr: "Pharamp",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		181,
	],
	hp: 120,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Flaaffy",
		fr: "Lainergie",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Acceleration Bolt",
				fr: "Éclair rapide",
			},
			effect: {
				en: "Search your deck for up to 2 basic Energy cards and attach them to 1 of your Pokémon. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck jusqu’à deux cartes Énergie de base et attachez-les à l’un de vos Pokémon. Mélangez ensuite votre deck.",
			},
			damage: 30,

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
			},
			effect: {
				en: "Flip a coin. If tails, Ampharos does 20 damage to itself.",
				fr: "Lancez une pièce. Si c’est pile, Pharamp s’inflige 20 dégâts.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
