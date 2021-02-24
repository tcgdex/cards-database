import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Bagon",
		fr: "Draby",
	},
	illustrator: "Yumi",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		371,
	],
	hp: 60,
	types: [
		"Dragon",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Rock Head",
				fr: "Tête de Roc",
			},
			effect: {
				en: "During your opponent's next turn, this Pokémon takes 10 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 10 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
