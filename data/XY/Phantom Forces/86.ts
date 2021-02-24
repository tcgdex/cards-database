import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Regigigas",
		fr: "Regigigas",
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		486,
	],
	hp: 130,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Daunt",
				fr: "Découragement",
			},
			effect: {
				en: "During your opponent's next turn, any damage done by attacks from the Defending Pokémon is reduced by 40 (before applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés par des attaques du Pokémon Défenseur sont réduits de 40 (avant application de la Faiblesse et de la Résistance).",
			},
			damage: 80,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heavy Impact",
				fr: "Gros Impact",
			},

			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
