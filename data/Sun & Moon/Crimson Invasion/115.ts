import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Buzzwole-GX",
		fr: "Mouscoto-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
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
				en: "Jet Punch",
				fr: "Coup Rapide",
			},
			effect: {
				en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
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
				en: "Knuckle Impact",
				fr: "Coup d’Articulations",
			},
			effect: {
				en: "This Pokémon can't attack during your next turn.",
				fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
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
				en: "Absorption-GX",
				fr: "Expansion-GX",
			},
			effect: {
				en: "This attack does 40 damage for each of your remaining Prize cards. (You can't use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 40 dégâts pour chacune des cartes Récompense qu'il vous reste. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
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
