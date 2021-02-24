import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Blaziken-GX",
		fr: "Braségali-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		257,
	],
	hp: 240,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Combusken",
		fr: "Galifeu",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
			},

			damage: 60,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Explosive Kick",
				fr: "Coup de Pied Explosif",
			},
			effect: {
				en: "Discard 2 Fire Energy from this Pokémon.",
				fr: "Défaussez 2 Énergies Fire de ce Pokémon.",
			},
			damage: 210,

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Blaze Out-GX",
				fr: "Embrasement-GX",
			},
			effect: {
				en: "Discard 2 Energy from your opponent's Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Défaussez 2 Énergies des Pokémon de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
