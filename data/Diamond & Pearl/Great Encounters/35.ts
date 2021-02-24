import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Combusken",
		fr: "Galifeu",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		256,
	],
	hp: 80,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Torchic",
		fr: "Poussifeu",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Bulk Up",
				fr: "Gonflette",
			},
			effect: {
				en: "During your next turn, each of Combusken's attacks does 30 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
				fr: "Lors de votre prochain tour, chacune des attaques de Galifeu inflige 30 dégâts supplémentaires au Pokémon Défenseur (avant application de la Faiblesse et de la Résistance).",
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Kick",
				fr: "Double pied",
			},
			effect: {
				en: "Flip 2 coins. This attack does 50 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de faces.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
