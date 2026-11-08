import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Vaporeon EX",
		'fr-fr': "Aquali-EX",
	},

	illustrator: "Naoki Saito",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		134,
	],

	hp: 180,

	types: [
		"Water",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Bubble Drain",
				'fr-fr': "Vide Bulle",
			},
			effect: {
				'en-us': "Heal 30 damage from this Pokémon.",
				'fr-fr': "Soignez 30 dégâts à ce Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Deep Squall",
				'fr-fr': "Rafale Profonde",
			},
			effect: {
				'en-us': "This attack does 130 damage minus 10 damage for each damage counter on this Pokémon.",
				'fr-fr': "Cette attaque inflige 130 dégâts moins 10 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
			},
			damage: "130−",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 288408,
		tcgplayer: 113682
	}
}

export default card
