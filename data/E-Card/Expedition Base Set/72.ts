import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Chansey",
		fr: "Leveinard",
		de: "Chaneira"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		113,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bind Wound",
				fr: "Pansement",
				de: "Wunden verbinden"
			},
			effect: {
				en: "Flip a coin. If heads, remove 2 damage counters from 1 of your Pokémon (1 if it has only 1).",
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
				en: "Dogpile",
				fr: "Empilage",
				de: "Hundehaufen"
			},

			effect: {
				en: "Count the number for Pokémon on your Bench. This attack does 10 times that number to the Defending Pokémon, and Chansey does 10 times that number of damage to itself.",
				fr: "Comptez le nombre de Pokémon sur votre Banc. Cette attaque inflige 10 fois ce nombre de dégâts au Pokémon Défenseur, et Leveinard s'inflige 10 fois ce nombre de dégâts.",
				de: "Zähle die Anzahl der Pokémon auf deiner Bank. Dieser Angriff fügt 10mal diese Zahl dem Verteidigenden Pokémon an Schaden zu, und Chaneira fügt sich selber 10mal diese Zahl an Schaden zu."
			},

			damage: "10x"
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274947
	}
}

export default card
