import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Chansey",
		'fr-fr': "Leveinard",
		'de-de': "Chaneira"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [113],

	hp: 90,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bind Wound",
				'fr-fr': "Pansement",
				'de-de': "Wunden verbinden"
			},
			effect: {
				'en-us': "Flip a coin. If heads, remove 2 damage counters from 1 of your Pokémon (1 if it has only 1).",
				'fr-fr': "Lancez une pièce. Si c'est face, retirez 2 marqueurs de dégâts d'un de vos Pokémon (1 seul s'il n'en a qu'un).",
				'de-de': "Wirf eine Münze. Entferne bei 'Kopf' 2 Schadensmarken von 1 deiner Pokémon (1, wenn es nur 1 hat)."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],

			name: {
				'en-us': "Dogpile",
				'fr-fr': "Empilage",
				'de-de': "Hundehaufen"
			},

			effect: {
				'en-us': "Count the number of Pokémon on your Bench. This attack does 10 times that number of damage to the Defending Pokémon, and Chansey does 10 times that number of damage to itself.",
				'fr-fr': "Comptez le nombre de Pokémon sur votre Banc. Cette attaque inflige 10 fois ce nombre de dégâts au Pokémon Défenseur, et Leveinard s'inflige 10 fois ce nombre de dégâts.",
				'de-de': "Zähle die Anzahl der Pokémon auf deiner Bank. Dieser Angriff fügt 10mal diese Zahl dem Verteidigenden Pokémon an Schaden zu, und Chaneira fügt sich selber 10mal diese Zahl an Schaden zu."
			},

			damage: "10×",
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 2,


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
			thirdParty: {
				tcgplayer: 84172,
				cardmarket: 274947
			},
		},
	],
}

export default card
