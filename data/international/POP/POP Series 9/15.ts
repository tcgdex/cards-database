import { Card } from 'models/database/card'
import Set from '../POP Series 9'

const card: Card = {
	name: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [25],

	hp: 60,

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
				'en-us': "Growl",
				'fr-fr': "Rugissement"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done by attacks from the Defending Pokémon is reduced by 20 (before applying Weakness and Resistance).",
				'fr-fr': "Lors du prochain tour de votre adversaire, tous dégâts infligés par des attaques au Pokémon Défenseur sont réduits de 20 (avant application de la Faiblesse et de la Résistance)."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Numb",
				'fr-fr': "Engourdi"
			},
			effect: {
				'en-us': "If Pikachu evolved from Pichu during this turn, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Si Pikachu évolue de Pichu lors de ce tour, le Pokémon Défenseur est maintenant Paralysé."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	description: {
		'en-us': "If it looses crackling power from the electric pouches on its cheeks, it is being wary.",
		'fr-fr': "Si les poches électriques de ses joues crépitent, c'est qu'il est sur ses gardes."
	},

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88092,
				cardmarket: 278566
			},
		},
		{
			type: "normal",
			stamp: ["pokemon-day"],
		},
	],

}

export default card
