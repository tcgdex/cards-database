import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Shaymin EX",
	},

	illustrator: "Kanako Eo",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		492,
	],

	hp: 110,

	types: [
		"Grass",
	],

	suffix: "EX",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Aroma of Gratitude",
			},
			effect: {
				en: "Once during your turn (before your attack), you may heal 20 damage from each of your Benched Basic Pokémon.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Floral Gain",
			},
			effect: {
				en: "Heal 20 damage and remove all Special Conditions from this Pokémon.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 291588
	}
}

export default card
