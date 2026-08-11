import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Buzzwole-GX",
		'fr-fr': "Mouscoto-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		794,
	],
	hp: 190,
	types: [
		"Fighting",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Jet Punch",
				'fr-fr': "Coup Rapide",
			},
			effect: {
				'en-us': "This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 30 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Knuckle Impact",
				'fr-fr': "Coup d’Articulations",
			},
			effect: {
				'en-us': "This Pokémon can't attack during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
			},
			damage: 160,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Absorption-GX",
				'fr-fr': "Expansion-GX",
			},
			effect: {
				'en-us': "This attack does 40 damage for each of your remaining Prize cards. (You can't use more than 1 GX attack in a game.)",
				'fr-fr': "Cette attaque inflige 40 dégâts pour chacune des cartes Récompense qu’il vous reste. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 40,

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
