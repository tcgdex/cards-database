import { Card } from '../../../interfaces'
import Set from '../Yellow A Alternate'

const card: Card = {
	name: {
		en: "Tapu Fini-GX",
		fr: "Tokopisco-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 170,
	types: [
		"Water",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Aqua Ring",
				fr: "Anneau Hydro",
			},
			effect: {
				en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Vous pouvez échanger ce Pokémon avec l’un de vos Pokémon de Banc.",
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Hydro Shot",
				fr: "Hydro-Coup",
			},
			effect: {
				en: "Discard 2 Water Energy from this Pokémon. This attack does 120 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez 2 Énergies Water de ce Pokémon. Cette attaque inflige 120 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Tapu Storm-GX",
				fr: "Toko Tempête-GX",
			},
			effect: {
				en: "Shuffle your opponent's Active Pokémon and all cards attached to it into their deck. If your opponent has no Benched Pokémon, this attack does nothing. (You can't use more than 1 GX attack in a game.)",
				fr: "Mélangez le Pokémon Actif de votre adversaire et toutes les cartes qui lui sont attachées dans son deck. Si votre adversaire n’a aucun Pokémon de Banc, cette attaque ne fait rien. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],


	retreat: 1,



}

export default card
