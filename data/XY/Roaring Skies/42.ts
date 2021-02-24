import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Jirachi",
		fr: "Jirachi",
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		385,
	],
	hp: 70,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Diminutive Desire",
				fr: "Infimreket",
			},
			effect: {
				en: "Look at the top 7 cards of your deck and put 1 of them into your hand. Shuffle the other cards back into your deck.",
				fr: "Regardez les 7 cartes du dessus de votre deck et ajoutez 1 d'entre elles à votre main. Mélangez les autres cartes avec votre deck.",
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Doom Desire",
				fr: "Carnareket",
			},
			effect: {
				en: "Discard all Energy attached to this Pokémon. The Defending Pokémon is Knocked Out at the end of your opponent's next turn.",
				fr: "Défaussez toutes les Énergies attachées à ce Pokémon. Le Pokémon Défenseur est mis K.O. à la fin du prochain tour de votre adversaire.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
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
