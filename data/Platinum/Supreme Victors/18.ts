import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Camerupt",
		fr: "Camerupt",
	},
	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		323,
	],
	hp: 120,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Numel",
		fr: "Chamallot",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Moving Fire",
				fr: "Feu bougeant",
			},
			effect: {
				en: "You may move a Fire Energy card attached to 1 of your Benched Pokémon to Camerupt.",
				fr: "Vous pouvez déplacer une carte Énergie Fire attachée à 1 de vos Pokémon de Banc sur Camerupt.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Volcanic Crash",
				fr: "Écrasement volcanique",
			},
			effect: {
				en: "Flip 3 coins. For each tails, discard the top card of your deck. Ignore this effect if your opponent has any Water Pokémon in play.",
				fr: "Lancez 3 pièces. Pour chaque pile, défaussez la carte du dessus de votre deck. Ignorez cet effet si votre adversaire possède des Pokémon Water en jeu.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+30"
		},
	],

	retreat: 4,



}

export default card
