import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Toxapex",
		fr: "Prédastérie",
	},
	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		748,
	],
	hp: 120,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Mareanie",
		fr: "Vorastérie",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Poison Sting",
				fr: "Dard-Venin",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Venom Fever",
				fr: "Fièvre Envenimée",
			},
			effect: {
				en: "If your opponent's Active Pokémon is Poisoned, this attack does 50 damage for each damage counter on that Pokémon.",
				fr: "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 50 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
