import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Dugtrio",
		fr: "Triopikeur",
	},
	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		51,
	],
	hp: 90,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Diglett",
		fr: "Taupiqueur",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
			},

			damage: 40,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Earthquake",
				fr: "Séisme",
			},
			effect: {
				en: "This attack does 20 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts à chacun de vos Pokémon de Banc. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
