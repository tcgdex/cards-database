import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Reshiram",
		'fr-fr': "Reshiram",
		'es-es': "Reshiram",
		'it-it': "Reshiram",
		'pt-br': "Reshiram",
		'de-de': "Reshiram"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		643,
	],

	hp: 130,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Purifying Flame",
				'fr-fr': "Flamme Purifiante",
			},
			effect: {
				'en-us': "Remove all Special Conditions from this Pokémon.",
				'fr-fr': "Retirez tous les États Spéciaux de ce Pokémon.",
			},
			damage: 50,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fusion Flare",
				'fr-fr': "Flamme Croix",
			},
			effect: {
				'en-us': "If Zekrom is on your Bench, this attack does 40 more damage.",
				'fr-fr': "Si Zekrom est sur votre Banc, cette attaque inflige 40 dégâts supplémentaires.",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "This legendary Pokémon can scorch the world with fire. It helps those who want to build a world of truth.",
	},

	thirdParty: {
		cardmarket: 280895,
		tcgplayer: 88708
	}
}

export default card
