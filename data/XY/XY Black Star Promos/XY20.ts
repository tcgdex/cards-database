import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Greninja EX",
		fr: "Amphinobi EX",
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		658,
	],

	hp: 170,

	types: [
		"Water",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Sharpshooting",
				fr: "Tir de Précision",
			},
			effect: {
				en: "This attack does 30 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Aqua Blast",
				fr: "Explosion Aquatique",
			},
			effect: {
				en: "Discard 1 Water Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie Water attachée à ce Pokémon.",
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281310
	}
}

export default card
