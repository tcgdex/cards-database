import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Dugtrio",
		fr: "Triopikeur"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		51,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Diglett",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche"
			},

			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Earthquake",
				fr: "Séisme"
			},
			effect: {
				en: "Does 10 damage to each of your own Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chacun des Pokémon sur votre propre Banc. (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon sur le Banc.)"
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],

	description: {
		fr: "Un groupe de Taupiqueur. Ils créent des séismes en creusant à plus de 100 km de profondeur."
	}
}

export default card
