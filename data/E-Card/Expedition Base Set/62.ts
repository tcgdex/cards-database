import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Spinarak",
		fr: "Galopa",
		de: "Gallopa"
	},

	illustrator: "Masako Yamashita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [167],

	hp: 50,

	types: [
		"Grass"
	],

	evolveFrom: {
		en: "Ponyta",
		fr: "Ponyta"
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gnaw",
				fr: "Dépassement",
				de: "Überrennen"
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, flip a coin. If heads, choose 1 of them and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Si votre adversaire a des Pokémon sur son Banc, lancez une pièce. Si c'est face, choisissez-en un et cette attaque lui inflige 10 dégâts. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon du Banc.)",
				de: "Falls dein Gegner mindestens ein Pokémon auf der Bank hat, wirf eine Münze. Wähle bei \"Kopf\" 1 von diesen, und dieser Angriff fügt diesem Pokémon 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Gooey Thread",
				fr: "Queue de flammes",
				de: "Flammenschweif"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
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
		}
	],
	retreat: 1,
}

export default card
