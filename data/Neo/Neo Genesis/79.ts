import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Swinub",
		fr: "Marcacrin",
		de: "Quiekel"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		220,
	],

	hp: 40,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Powder Snow",
				fr: "Poudreuse",
				de: "Power Snow"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "The Defending Pokémon is now Asleep."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		en: "It rubs its snout on the ground to find and dig up food. It sometimes discovers hot springs.",
		fr: "Il frotte sa truffe sur le sol pour trouver et déterrer sa nourriture. Il découvre parfois des sources d'eau chaude."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274479,
				tcgplayer: 89698
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274479,
				tcgplayer: 89698
			}
		}
	]
}

export default card
