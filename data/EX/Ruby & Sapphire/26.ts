import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Cascoon",
		fr: "Blindalys",
		de: "Panekon"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		268,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Wurmple",
		fr: "Chenipotte"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Hard Cocoon",
				fr: "Carapace",
				de: "Hard Cocoon"
			},
			effect: {
				en: "During your opponent's turn, if Cascoon would be damaged by an opponent's attack (after applying Weakness and Resistance), flip a coin. If heads, reduce that damage by 30.",
				fr: "Pendant le tour de votre adversaire, si l'une de ses attaques inflige des dégâts à Blindalys (après application de la Faiblesse et de la Résistance), lancez une pièce. Si c'est face, réduisez ces dégâts de 30.",
				de: "During your opponent's turn, if Cascoon would be damaged by an opponent's attack (after applying Weakness and Resistance), flip a coin. If heads, reduce that damage by 30."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Poison Thread",
				fr: "Fil empoisonné",
				de: "Poison Thread"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "The Defending Pokémon is now Poisoned."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],


	retreat: 2,

	thirdParty: {
		cardmarket: 275674,
		tcgplayer: 84119
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
	]
}

export default card
