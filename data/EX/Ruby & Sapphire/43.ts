import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Silcoon",
		fr: "Armulys",
		de: "Schaloko"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [266],

	hp: 60,

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
				en: "During your opponent's turn, if Silcoon would be damaged by an opponent's attack (after applying Weakness and Resistance), flip a coin. If heads, reduce that damage by 30.",
				fr: "Pendant le tour de votre adversaire, si l'une de ses attaques inflige des dégâts à Almurys (après application de la Faiblesse et de la Résistance), lancez une pièce. Si c'est face, réduisez ces dégâts de 30.",
				de: "Wirf eine Münze, wenn Schaloko im Zug deines Gegners Schaden (nachdem Schwäche und Resistenz verrechnet wurden) von einem gegnerischen Angriff bekommen würde. Bei „Kopf“ wird der Schaden um 30 Schadenspunkte reduziert."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Gooey Thread",
				fr: "Fil gluant",
				de: "Klebriger Faden"
			},
			effect: {
				en: "The Defending Pokémon can't retreat until the end of your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite tant que le prochain tour de votre adversaire n'est pas terminé.",
				de: "Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},
			damage: 10,

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
				cardmarket: 275691,
				tcgplayer: 89210
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275691,
				tcgplayer: 89210
			}
		},
	],

}

export default card
