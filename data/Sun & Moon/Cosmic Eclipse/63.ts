import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Wishiwashi-GX",
		fr: "Froussardine-GX",
	},
	illustrator: "sadaji",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		746,
	],
	hp: 130,
	types: [
		"Water",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "School Storm",
				fr: "Banc Houleux",
			},
			effect: {
				en: "This attack does 20 damage for each of your Wishiwashi and Wishiwashi-GX in play.",
				fr: "Cette attaque inflige 20 dégâts pour chacun de vos Froussardine et Froussardine-GX en jeu.",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Massive Catch-GX",
				fr: "Prise Massive-GX",
			},
			effect: {
				en: "Look at the top 12 cards of your deck and put any number of Basic Pokémon you find there onto your Bench. Shuffle the other cards back into your deck. (You can't use more than 1 GX attack in a game.)",
				fr: "Regardez les 12 cartes du dessus de votre deck et placez autant de Pokémon de base trouvés que vous le voulez sur votre Banc. Mélangez les autres cartes avec votre deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
