import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Palkia-EX",
		fr: "Palkia-EX",
	},
	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		484,
	],
	hp: 180,
	types: [
		"Water",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Aqua Turbo",
				fr: "Aqua Turbo",
			},
			effect: {
				en: "Search your deck for up to 2 Water Energy cards and attach them to 1 of your Benched Pokémon. Shuffle your deck afterward.",
				fr: "Cherchez jusqu'à 2 cartes Énergie Water dans votre deck et attachez-les à l'un de vos Pokémon de Banc. Mélangez ensuite votre deck.",
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Pearl Hurricane",
				fr: "Ouragan Perle",
			},
			effect: {
				en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
