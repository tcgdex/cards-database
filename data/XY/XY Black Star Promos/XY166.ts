import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "M Gengar EX",
		fr: "M-Ectoplasma EX"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		94,
	],

	hp: 210,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Gengar-EX",
		fr: "Ectoplasma-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Hollow Geist",
				fr: "Ectoplasme Vaporeux"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned and Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	suffix: "EX",
	retreat: 2
}

export default card
