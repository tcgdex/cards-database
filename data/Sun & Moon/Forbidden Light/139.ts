import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Xerneas-GX",
		fr: "Xerneas-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		716,
	],
	hp: 180,
	types: [
		"Fairy",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Overrun",
				fr: "Dépassement",
			},
			effect: {
				en: "This attack does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 20,

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Aurora Horns",
				fr: "Cornes Boréales",
			},

			damage: 120,

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Sanctuary-GX",
				fr: "Sanctuaire-GX",
			},
			effect: {
				en: "Move all damage counters from each of your Pokémon to your opponent's Active Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Déplacez tous les marqueurs de dégâts de chacun de vos Pokémon vers le Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
