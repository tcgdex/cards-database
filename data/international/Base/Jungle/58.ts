import { Card } from 'models/database/card'
import Set from '../Jungle'

const card: Card = {
	name: {
		'en-us': "Oddish",
		'fr-fr': "Mystherbe",
		'de-de': "Myrapla"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		43,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Stun Spore",
				'fr-fr': "Para-spore",
				'de-de': "Stachelsporen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon jetzt gelähmt."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Sprout",
				'fr-fr': "Repousse",
				'de-de': "Sprössling"
			},
			effect: {
				'en-us': "Search your deck for a Basic Pokémon named Oddish and put it onto your Bench. Shuffle your deck afterward. (You can't use this attack if your Bench is full.)",
				'fr-fr': "Cherchez dans votre deck un Pokémon de base appelé Mystherbe et placez-le sur votre Banc. Mélangez ensuite votre deck. (Vous ne pouvez pas utiliser cette attaque si votre Banc est plein.)",
				'de-de': "Suche in deinem Deck nach einer Basis-Pokémon-Karte mit dem Namen Myrapla und lege sie auf deine Bank. Mische dein Deck danach. (du kannst diesen Angriff nicht einsetzen, wenn deine bank voll ist.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "During the day, it keeps its face buried in the ground. At night, it wanders around sowing its seeds.",
		'fr-fr': "Pendant la journée il se cache sous terre. Il s'aventure la nuit pour planter des graines."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273855,
				tcgplayer: 45161
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273855,
				tcgplayer: 45161
			}
		}
	],
}

export default card
