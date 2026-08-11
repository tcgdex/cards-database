import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Salamence EX",
		'fr-fr': "Drattak-EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		373,
	],

	hp: 180,

	types: [
		"Dragon",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Beastly Fang",
				'fr-fr': "Croc Bestial"
			},
			effect: {
				'en-us': "This attack does 50 more damage for each of your opponent's Pokémon-EX.",
				'fr-fr': "Cette attaque inflige 50 dégâts supplémentaires pour chaque Pokémon-EX de votre adversaire."
			},
			damage: "10+",

		},
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Strike",
				'fr-fr': "Frappe du Dragon"
			},
			effect: {
				'en-us': "This Pokémon can't use Dragon Strike during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas utiliser Frappe du Dragon pendant votre prochain tour."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 295161
	}
}

export default card
