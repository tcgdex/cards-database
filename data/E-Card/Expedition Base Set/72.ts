import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Cubone",
		fr: "Leveinard",
		de: "Chaneira"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [104],

	hp: 40,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Teary Eyes",
				fr: "Pansement",
				de: "Wunden verbinden"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Cubone by attacks is reduced by 20.",
				fr: "Lancez une pièce. Si c'est face, retirez 2 marqueurs de dégâts d'un de vos Pokémon (1 seul s'il n'en a qu'un).",
				de: "Wirf eine Münze. Entferne bei 'Kopf' 2 Schadensmarken von 1 deiner Pokémon (1, wenn es nur 1 hat)."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],

			name: {
				en: "Tackle",
				fr: "Empilage",
				de: "Hundehaufen"
			},

			effect: {
				en: "Count the number for Pokémon on your Bench. This attack does 10 times that number to the Defending Pokémon, and Chansey does 10 times that number of damage to itself.",
				fr: "Comptez le nombre de Pokémon sur votre Banc. Cette attaque inflige 10 fois ce nombre de dégâts au Pokémon Défenseur, et Leveinard s'inflige 10 fois ce nombre de dégâts.",
				de: "Zähle die Anzahl der Pokémon auf deiner Bank. Dieser Angriff fügt 10mal diese Zahl dem Verteidigenden Pokémon an Schaden zu, und Chaneira fügt sich selber 10mal diese Zahl an Schaden zu."
			},

			damage: 10,
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],,
	weaknesses: [
		{
			type: "Grass",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84172,
				cardmarket: 274947
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
