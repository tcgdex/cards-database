import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Machamp EX",
		'fr-fr': "Mackogneur EX",
	},

	illustrator: "Eske Yoshinob",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		68,
	],

	hp: 180,

	types: [
		"Fighting",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Steaming Mad",
				'fr-fr': "Fou Furax",
			},
			effect: {
				'en-us': "This attack does 20 damage times the number of damage counters on this Pokémon. This Pokémon is now Confused.",
				'fr-fr': "Cette attaque inflige 20 dégâts multipliés par le nombre de marqueurs de dégâts placés sur ce Pokémon. Ce Pokémon est maintenant Confus.",
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 289558
	}
}

export default card
