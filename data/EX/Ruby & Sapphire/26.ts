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

	dexId: [268],

	hp: 70,

	types: [
		"Grass"
	],

	evolveFrom: {
		en: "Wurmple",
		fr: "Chenipotte",
		de: "Waumpel"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Hard Cocoon",
				fr: "Carapace",
				de: "Harter Kokon"
			},
			effect: {
				en: "During your opponent's turn, if Cascoon would be damaged by an opponent's attack (after applying Weakness and Resistance), flip a coin. If heads, reduce that damage by 30.",
				fr: "Pendant le tour de votre adversaire, si l'une de ses attaques inflige des dégâts à Blindalys (après application de la Faiblesse et de la Résistance), lancez une pièce. Si c'est face, réduisez ces dégâts de 30.",
				de: "Wirf eine Münze, wenn Panekon im Zug deines Gegner Schaden (nachdem Schwäche und Resistenz verrechnet wurden) von einem gegnerischen Angriff bekommen würde. Bei „Kopf“ wird der Schaden um 30 Schadenspunkte reduziert."
			}
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
				de: "Giftiger Faden"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Das Verteidigende Pokémon ist jetzt vergiftet."
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


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275674,
				tcgplayer: 84119
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275674,
				tcgplayer: 84119
			}
		},
	],

}

export default card
