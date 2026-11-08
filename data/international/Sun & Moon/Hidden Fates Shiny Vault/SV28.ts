import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Magneton",
		'fr-fr': "Magnéton",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		82,
	],
	hp: 90,
	types: [
		"Metal",
	],
	evolveFrom: {
		'en-us': "Magnemite",
		'fr-fr': "Magnéti",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
			},

			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Zap Cannon",
				'fr-fr': "Élecanon",
			},
			effect: {
				'en-us': "This Pokémon can't use Zap Cannon during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas utiliser Élecanon pendant votre prochain tour.",
			},
			damage: 80,

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
			value: "-20"
		},
	],
	retreat: 2,




	description: {
		'en-us': "It has about three times the electrical power of Magnemite. For some reason, outbreaks of this Pokémon happen when lots of sunspots appear.",
	},
}

export default card
