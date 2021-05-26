import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Galarian Obstagoon",
		fr: "Ixon de Galar"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 170,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Galarian Linoone",
		fr: "Linéon de Galar"
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Wicked Ruler",
				fr: "Leader Dément"
			},
			effect: {
				en: "Once during your turn, you may have your opponent discard cards from their hand until they have 4 cards in their hand.",
				fr: "Une fois pendant votre tour, vous pouvez demander à votre adversaire de défausser des cartes de sa main jusqu’à en avoir 4 en main."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Knuckle Impact",
				fr: "Coup d’Articulations"
			},
			effect: {
				en: "During your next turn, this Pokémon can’t attack.",
				fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer."
			},
			damage: 180,

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
