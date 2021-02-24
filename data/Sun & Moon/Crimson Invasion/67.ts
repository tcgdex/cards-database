import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Aggron",
		fr: "Galeking",
	},
	illustrator: "Yoshinobu Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		306,
	],
	hp: 170,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Lairon",
		fr: "Galegon",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Revenge Cannon",
				fr: "Canon Talion",
			},
			effect: {
				en: "This attack does 10 more damage for each damage counter on all of your Benched Pokémon.",
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur vos Pokémon de Banc.",
			},
			damage: 10,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Buster Swing",
				fr: "Repoussoir",
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Fire",
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



}

export default card
