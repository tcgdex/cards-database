import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Shaymin EX",
		'fr-fr': "Shaymin-EX"
	},

	illustrator: "Kanako Eo",
	rarity: "Promo",
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
				'en-us': "Aroma of Gratitude",
				'fr-fr': "Parfum de Reconnaissance"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may heal 20 damage from each of your Benched Basic Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez soigner 20 dégâts à chaque Pokémon de base de votre Banc."
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
				'en-us': "Floral Gain",
				'fr-fr': "Gain Floral"
			},
			effect: {
				'en-us': "Heal 20 damage and remove all Special Conditions from this Pokémon.",
				'fr-fr': "Soignez 20 dégâts et retirez tous les États Spéciaux de ce Pokémon."
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
