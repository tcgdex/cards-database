import { Card } from 'models/database/card'
import Set from '../POP Series 9'

const card: Card = {
	name: {
		'en-us': "Turtwig",
		'fr-fr': "Tortipouss"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [387],

	hp: 60,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Absorb",
				'fr-fr': "Vol-Vie"
			},
			effect: {
				'en-us': "Remove 1 damage counter from Turtwig.",
				'fr-fr': "Retirez un marqueur de dégât à Tortipouss."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Parboil",
				'fr-fr': "Parboil"
			},
			effect: {
				'en-us': "If you have Chimchar in play, this attack does 40 damage plus 20 more damage and the Defending Pokémon is now Burned.",
				'fr-fr': "Si vous avez Ouisticram en jeu, cette attaque inflige 40 dégâts plus 20 dégâts. Le Pokémon Défenseur est maintenant Brûlé."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	description: {
		'en-us': "It undertakes photosynthesis with its body, making oxygen. The leaf on its head wilts if it is thirsty.",
		'fr-fr': "Son corps produit de l'oxygène par photosynthèse. La feuille sur sa tête flétrit quand il a soif."
	},

	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90078,
				cardmarket: 278568
			},
		},
	],

}

export default card
