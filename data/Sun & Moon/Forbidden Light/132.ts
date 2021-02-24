import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Palkia-GX",
		fr: "Palkia-GX",
	},
	illustrator: "5ban Graphics",
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


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Spatial Control",
				fr: "Contrôle Spatial",
			},
			effect: {
				en: "Move any number of Energy from your Benched Pokémon to this Pokémon.",
				fr: "Déplacez autant d’Énergies que vous voulez de vos Pokémon de Banc vers ce Pokémon.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydro Pressure",
				fr: "Pression Hydroélectrique",
			},
			effect: {
				en: "This attack does 20 more damage times the amount of Water Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies Water attachées à ce Pokémon.",
			},
			damage: 60,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Zero Vanish-GX",
				fr: "Zéro Disparaissant-GX",
			},
			effect: {
				en: "Shuffle all Energy from each of your opponent's Pokémon into their deck. (You can't use more than 1 GX attack in a game.)",
				fr: "Mélangez l’Énergie de chacun des Pokémon de votre adversaire avec son deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 150,

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
