import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Hitmonchan",
		fr: "Kicklee",
		de: "Kicklee"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [107],

	hp: 60,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rush",
				fr: "Coud'pattes",
				de: "Smash Kick"
			},

			damage: "10×",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Smash Punch",
				fr: "Allonge",
				de: "Stretch Kick"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Si votre adversaire a des Pokémon sur son Banc, choisissez l'un d'eux et cette attaque lui inflige 30 dégâts. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon du Banc.)",
				de: "If your opponent has any Benched Pokémon, choose 1 of them and this attack does 30 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			}

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86104,
				cardmarket: 274956
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
