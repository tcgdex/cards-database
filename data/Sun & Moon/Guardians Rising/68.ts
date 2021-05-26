import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Gliscor",
		fr: "Scorvol",
	},
	illustrator: "Yoshinobu Saito",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		472,
	],
	hp: 110,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Gligar",
		fr: "Scorplane",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Finishing Stinger",
				fr: "Dard Final",
			},
			effect: {
				en: "If your opponent's Active Pokémon has no damage counters on it before this attack does damage, this attack does nothing.",
				fr: "Si le Pokémon Actif de votre adversaire n’a aucun marqueur de dégâts avant que cette attaque n’inflige des dégâts, cette attaque ne fait rien.",
			},
			damage: 70,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Guillotine",
				fr: "Guillotine",
			},

			damage: 90,

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
