import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Mewtwo-GX",
		'fr-fr': "Mewtwo-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		150,
	],
	hp: 190,
	types: [
		"Psychic",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Full Burst",
				'fr-fr': "Pleine Puissance",
			},
			effect: {
				'en-us': "This attack does 30 damage times the amount of Energy attached to this Pokémon.",
				'fr-fr': "Cette attaque inflige 30 dégâts multipliés par le nombre d’Énergies attachées à ce Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Super Absorption",
				'fr-fr': "Super Absorption",
			},
			effect: {
				'en-us': "Heal 30 damage from this Pokémon.",
				'fr-fr': "Soignez 30 dégâts à ce Pokémon.",
			},
			damage: 60,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Psystrike-GX",
				'fr-fr': "Frappe Psy-GX",
			},
			effect: {
				'en-us': "This attack's damage isn't affected by any effects on your opponent's Active Pokémon. (You can't use more than 1 GX attack in a game.)",
				'fr-fr': "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 200,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
