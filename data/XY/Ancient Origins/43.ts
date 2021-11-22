import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "M Tyranitar EX",
		fr: "M Tyranocif-EX",
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		248,
	],

	hp: 240,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Tyranitar-EX",
		fr: "Tyranocif-EX",
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Destroyer King",
				fr: "Double Θ",
			},
			effect: {
				en: "This attack does 60 more damage for each damage counter on your opponent's Active Pokémon.",
			},
			damage: "110+",

		},
		{

			name: {
				fr: "Règle des Méga-Évolutions",
			},


		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Roi Destructeur",
			},
			effect: {
				fr: "Cette attaque inflige 60 dégâts supplémentaires pour chaque marqueur de dégâts placé sur le Pokémon Actif de votre adversaire.",
			},
			damage: "110+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 4,
	suffix: "EX"
}

export default card
