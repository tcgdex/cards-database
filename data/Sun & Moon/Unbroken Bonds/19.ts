import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Kartana",
		fr: "Katagami",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		798,
	],
	hp: 70,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Big Cut",
				fr: "Grosse Coupure",
			},
			effect: {
				en: "If you have exactly 4 Prize cards remaining, this attack does 120 more damage.",
				fr: "S’il vous reste exactement 4 cartes Récompense, cette attaque inflige 120 dégâts supplémentaires.",
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "False Swipe",
				fr: "Faux-Chage",
			},
			effect: {
				en: "Flip a coin. If heads, put damage counters on your opponent's Active Pokémon until its remaining HP is 10.",
				fr: "Lancez une pièce. Si c’est face, placez des marqueurs de dégâts sur le Pokémon Actif de votre adversaire jusqu’à ce qu’il ait 10 PV.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
