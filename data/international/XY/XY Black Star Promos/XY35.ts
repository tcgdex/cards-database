import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "M Metagross EX",
		'fr-fr': "M Métalosse EX",
	},
	illustrator: "5ban Graphics",
	rarity: "Promo",
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
		'en-us': "Metagross-EX",
		'fr-fr': "Métalosse-EX",
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
				'en-us': "Gatling Slug",
				'fr-fr': "Frappe Répétée",
			},
			effect: {
				'en-us': "This attack does 10 more damage for each Metal Energy attached to this Pokémon.",
				'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque Énergie Metal attachée à ce Pokémon.",
			},
			damage: "130＋",

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



}

export default card
