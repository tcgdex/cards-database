import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Rapidash",
		'fr-fr': "Galopa",
		'de-de': "Gallopa"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [78],

	hp: 70,

	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Ponyta",
		'fr-fr': "Ponyta"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Overrun",
				'fr-fr': "Dépassement",
				'de-de': "Überrennen"
			},
			effect: {
				'en-us': "If your opponent has any Benched Pokémon, flip a coin. If heads, choose 1 of them and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Si votre adversaire a des Pokémon sur son Banc, lancez une pièce. Si c'est face, choisissez-en un et cette attaque lui inflige 10 dégâts. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon du Banc.)",
				'de-de': "Falls dein Gegner mindestens ein Pokémon auf der Bank hat, wirf eine Münze. Wähle bei \"Kopf\" 1 von diesen, und dieser Angriff fügt diesem Pokémon 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flame Tail",
				'fr-fr': "Queue de flammes",
				'de-de': "Flammenschweif"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88580,
				cardmarket: 274901
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88580,
				cardmarket: 274901
			},
		},
	],
	retreat: 0,
}

export default card
