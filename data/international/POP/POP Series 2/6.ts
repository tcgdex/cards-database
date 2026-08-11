import { Card } from 'models/database/card'
import Set from '../POP Series 2'

const card: Card = {
	name: {
		'en-us': "Venusaur",
		'fr-fr': "Florizarre"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [3],

	hp: 120,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Ivysaur",
		'fr-fr': "Herbizarre"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Wide Solarbeam",
				'fr-fr': "« Grand rayon solaire »"
			},
			effect: {
				'en-us': "Does 20 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 20 dégâts à 2 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Hard Plant",
				'fr-fr': "« Herbe forte »"
			},
			effect: {
				'en-us': "Venusaur can't use Hard Plant during your next turn.",
				'fr-fr': "Florizarre ne peut pas utiliser Herbe forte lors de votre prochain tour."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire"
		},
	],
	retreat: 3,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90317,
				cardmarket: 277437
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 90317,
				cardmarket: 277437
			},
		},
	],

}

export default card
