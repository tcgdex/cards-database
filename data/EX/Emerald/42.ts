import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Volbeat",
		fr: "Muciole",
		de: "Volbeat"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		313,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Confuse Ray",
				fr: "Onde folie",
				de: "Confuse Ray"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Confused."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Double-edge",
				fr: "Damoclès",
				de: "Double-edge"
			},
			effect: {
				en: "Volbeat does 10 damage to itself.",
				fr: "Muciole s'inflige 10 dégâts.",
				de: "Volbeat does 10 damage to itself."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		tcgplayer: 90397,
		cardmarket: 276553
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
