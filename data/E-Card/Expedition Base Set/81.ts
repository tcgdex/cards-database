import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Hitmonlee",
		fr: "Kicklee"
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		106,
	],
	hp: 60,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Smash Kick",
				fr: "Coud'pattes"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Stretch Kick",
				fr: "Allonge"
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, chose 1 of them and this attack does 30 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.",
				fr: "Si votre adversaire a des Pokémon sur son Banc, choisissez l'un d'eux et cette attaque lui inflige 30 dégâts. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon du Banc.)"
			}

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
