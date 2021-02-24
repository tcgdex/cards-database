import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Nidoran♀",
		fr: "Nidoran♀",
	},
	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		29,
	],
	hp: 50,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Friend Search",
				fr: "À la recherche d'amis",
			},
			effect: {
				en: "Look at the top 5 cards of your deck, choose 1 Pokémon you find there, show it to your opponent, and put it into your hand. Shuffle the other cards back into your deck.",
				fr: "Regardez les 5 cartes du dessus de votre deck, choisissez-y un Pokémon, montrez-le à votre adversaire et ajoutez-le à votre main. Mélangez les autres cartes avec votre deck.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Double Kick",
				fr: "Double pied",
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
