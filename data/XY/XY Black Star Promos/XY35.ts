import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "M Metagross EX",
		fr: "M-Métalosse EX",
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		376,
	],

	hp: 220,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Metagross-EX",
		fr: "Métalosse-EX",
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gatling Slug",
				fr: "Frappe Répétée",
			},
			effect: {
				en: "This attack does 10 more damage for each Metal Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque Énergie Metal attachée à ce Pokémon.",
			},
			damage: "130+",

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
			value: "−20"
		},
	],

	retreat: 4,
	suffix: "EX"
}

export default card
