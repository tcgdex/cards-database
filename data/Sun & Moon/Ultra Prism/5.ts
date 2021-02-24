import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Roserade",
		fr: "Roserade",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		407,
	],
	hp: 100,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Roselia",
		fr: "Rosélia",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Inviting Poison",
				fr: "Poison Tentant",
			},
			effect: {
				en: "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon. The new Active Pokémon is now Poisoned.",
				fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Le nouveau Pokémon Actif est maintenant Empoisonné.",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Flower Tornado",
				fr: "Floramixeur",
			},
			effect: {
				en: "Move any number of Grass Energy from your Pokémon to your other Pokémon in any way you like.",
				fr: "Déplacez autant d’Énergies Grass attachées à vos Pokémon que vous le voulez sur vos autres Pokémon, de la manière que vous voulez.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
