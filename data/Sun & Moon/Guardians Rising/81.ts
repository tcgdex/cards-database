import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Absol",
		fr: "Absol",
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		359,
	],
	hp: 100,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Future Sight",
				fr: "Prescience",
			},
			effect: {
				en: "Look at the top 4 cards of either player's deck and put them back in any order.",
				fr: "Regardez les 4 cartes du dessus du deck de l’un des joueurs et replacez-les dans l’ordre de votre choix.",
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Doom News",
				fr: "Nouvelles Sinistres",
			},
			effect: {
				en: "Put all Energy attached to this Pokémon into your hand. At the end of your opponent's next turn, the Defending Pokémon will be Knocked Out.",
				fr: "Placez toutes les Énergies attachées à ce Pokémon dans votre main. À la fin du prochain tour de votre adversaire, le Pokémon Défenseur sera K.O.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
