import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Leavanny",
		fr: "Manternel",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		542,
	],
	hp: 130,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Swadloon",
		fr: "Couverdure",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Nurturing",
				fr: "Affection",
			},
			effect: {
				en: "Choose 1 of your Pokémon. Search your deck for a card that evolves from that Pokémon and put it onto that Pokémon. (This counts as evolving that Pokémon.) Shuffle your deck afterward.",
				fr: "Choisissez 1 de vos Pokémon. Cherchez dans votre deck une carte Évolution du Pokémon choisi et placez-la sur celui-ci. (Cela équivaut à faire évoluer le Pokémon choisi.) Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "X-Scissor",
				fr: "Plaie-Croix",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 50 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts supplémentaires.",
			},
			damage: 30,

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
