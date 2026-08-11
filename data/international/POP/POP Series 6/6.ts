import { Card } from 'models/database/card'
import Set from '../POP Series 6'

const card: Card = {
	name: {
		'en-us': "Drifloon",
		'fr-fr': "Drifloon"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [425],

	hp: 60,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Blowing Wind",
				'fr-fr': "Vent violent"
			},
			effect: {
				'en-us': "Flip a coin. If heads, put 1 of your Benched Pokémon and all cards attached to it on top of your deck. Shuffle your deck afterward.",
				'fr-fr': "Lancez une pièce. Si c'est face, placez 1 de vos Pokémon de Banc et toutes les cartes qui lui sont attachées au dessus de votre deck. Ensuite, mélangez votre deck."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Ominous Wind",
				'fr-fr': "Vent Mauvais"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused and can't retreat during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus et ne peut pas battre en retraite lors du prochain tour de votre adversaire."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],
	description: {
		'en-us': "A Pokémon formed by the spirits of people and Pokémon. It loves damp, humid seasons."
	},

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84954,
				cardmarket: 277891
			},
		},
	],

}

export default card
