import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Vikavolt-GX",
		fr: "Lucanon-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		738,
	],
	hp: 240,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Charjabug",
		fr: "Chrysapile",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Charge Beam",
				fr: "Rayon Chargé",
			},
			effect: {
				en: "Attach an Energy card from your discard pile to this Pokémon.",
				fr: "Attachez une carte Énergie de votre pile de défausse à ce Pokémon.",
			},
			damage: 50,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Super Zap Cannon",
				fr: "Super Élecanon",
			},
			effect: {
				en: "Discard 2 Energy from this Pokémon.",
				fr: "Défaussez 2 Énergies de ce Pokémon.",
			},
			damage: 180,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gigatron-GX",
				fr: "Gigatron-GX",
			},
			effect: {
				en: "This attack does 60 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can't use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 60 dégâts à chacun des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
