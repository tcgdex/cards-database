import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Pyukumuku",
		fr: "Concombaffe",
	},
	illustrator: "Asako Ito",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		771,
	],
	hp: 70,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call for Family",
				fr: "Appel à la Famille",
			},
			effect: {
				en: "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 2 Pokémon de base dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Surprise Fist",
				fr: "Poing Surprise",
			},
			effect: {
				en: "You and your opponent play Rock-Paper-Scissors. If you win, this attack does 60 more damage.",
				fr: "Jouez à pierre-ciseaux-feuille avec votre adversaire. Si vous gagnez, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
