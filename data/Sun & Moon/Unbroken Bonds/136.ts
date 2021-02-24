import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Togepi",
		fr: "Togepi",
	},
	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		175,
	],
	hp: 50,
	types: [
		"Fairy",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Daunt",
				fr: "Découragement",
			},
			effect: {
				en: "During your opponent's next turn, the Defending Pokémon's attacks do 30 less damage (before applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 30 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
