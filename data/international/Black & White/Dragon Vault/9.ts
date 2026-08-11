import { Card } from 'models/database/card'
import Set from '../Dragon Vault'

const card: Card = {
	name: {
		'en-us': "Latias",
		'fr-fr': "Latias",
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		380,
	],

	hp: 100,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Energy Assist",
				'fr-fr': "Assistance Énergétique",
			},
			effect: {
				'en-us': "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon.",
				'fr-fr': "Attachez une carte Énergie de base de votre pile de défausse à 1 de vos Pokémon de Banc.",
			},

		},
		{
			cost: [
				"Fire",
				"Psychic",
			],
			name: {
				'en-us': "Sky Heal",
				'fr-fr': "Guérison Céleste",
			},
			effect: {
				'en-us': "If Latios is on your Bench, heal 20 damage from this Pokémon.",
				'fr-fr': "Si Latios est sur votre Banc, soignez 20 dégâts à ce Pokémon.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its body is covered in a down that can refract light in such a way that it becomes invisible.",
	},

	thirdParty: {
		cardmarket: 281009,
		tcgplayer: 86654
	}
}

export default card
