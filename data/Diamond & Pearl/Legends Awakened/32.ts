import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Kyogre",
		fr: "Kyogre",
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		382,
	],

	hp: 100,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Drizzle",
				fr: "Crachin",
			},
			effect: {
				en: "Choose up to 2 basic Water Energy cards from your hand and attach them to 1 of your Pokémon.",
				fr: "Choisissez jusqu'à 2 cartes Énergie de base Water de votre main et attachez-les à 1 de vos Pokémon.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "High Tide",
				fr: "Marée haute",
			},
			effect: {
				en: "Discard 2 Water Energy attached to Kyogre. This attack does 20 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez 2 Énergies Water attachées à Kyogre. Cette attaque inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		fr: "On dit qu'il a fait monter les eaux en causant des pluies diluviennes. Il somnolait dans une fosse marine."
	}
}

export default card
