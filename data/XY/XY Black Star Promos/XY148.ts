import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Shaymin EX",
		fr: "Shaymin EX"
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
				fr: "Parfum de Reconnaissance"
			},
			effect: {
				en: "Once during your turn (before your attack), you may heal 20 damage from each of your Benched Basic Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez soigner 20 dégâts à chaque Pokémon de base de votre Banc."
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
				fr: "Gain Floral"
			},
			effect: {
				en: "Heal 20 damage and remove all Special Conditions from this Pokémon.",
				fr: "Soignez 20 dégâts et retirez tous les États Spéciaux de ce Pokémon."
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
	stage: "Basic"
}

export default card
