import { Card } from 'models/database/card'
import Set from '../POP Series 3'

const card: Card = {
	name: {
		'en-us': "Minun",
		'fr-fr': "Negapi"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [312],

	hp: 50,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Cheer Up",
				'fr-fr': "Courage !"
			},
			effect: {
				'en-us': "Draw a card. If you have Plusle in play, draw 2 cards instead.",
				'fr-fr': "Piochez une carte. Si vous avez Posipi en jeu, piochez 2 cartes à la place."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Negative Ion",
				'fr-fr': "Ion négatif"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done by attacks from the Defending Pokémon is reduced by 10 (before applying Weakness and Resistance).",
				'fr-fr': "Lors du prochain tour de votre adversaire, tous dégâts infligés par des attaques du Pokémon Défenseur sont réduits de 10 (avant application de la Faiblesse et de la Résistance)."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Power Bolt",
				'fr-fr': "« Boulon d'alimentation »"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon that has any Poké-Powers. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire qui a un Poké-Power. Cette attaque inflige 30 dégâts à ce Pokémon. (N'appliquez pas la Faiblesse et la Résistance aux Pokémon de Banc.)"
			}

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87487,
				cardmarket: 277452
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87487,
				cardmarket: 277452
			},
		},
	],

}

export default card
