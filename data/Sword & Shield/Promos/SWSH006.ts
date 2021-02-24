import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		fr: "Gorythmic",
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 170,
	types: [
		"Grass",
	],

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				fr: "Rythme Voltaique",
			},
			effect: {
				fr: "Une fois pendant votre tour, vous pouvez chercher dans votre deck jusqu'à 2 cartes Énergie Plante, puis les attacher à l'un de vos Pokémon. Mélangez ensuite votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				fr: "Enfoncement",
			},

			damage: 140,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
