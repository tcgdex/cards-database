import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Keldeo V",
		fr: "Keldeo V",
	},
	illustrator: "PLANETA Igarashi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		647,
	],
	hp: 210,
	types: [
		"Water",
	],

	stage: "Basic",
	suffix: "V",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Wave Splash",
				fr: "Grosse Vague",
			},

			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Secret Sword",
				fr: "Lame Ointe",
			},
			effect: {
				en: "This attack does 30 more damage for each Water Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Eau attachée à ce Pokémon.",
			},
			damage: "50+",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
