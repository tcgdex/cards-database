import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Alolan Ninetales-GX",
		fr: "Feunard d’Alola-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		38,
	],
	hp: 210,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Alolan Vulpix",
		fr: "Goupix d’Alola",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ice Blade",
				fr: "Lame de Glace",
			},
			effect: {
				en: "This attack does 50 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 50 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Blizzard Edge",
				fr: "Lame Tempête",
			},
			effect: {
				en: "Discard 2 Energy from this Pokémon.",
				fr: "Défaussez 2 Énergies de ce Pokémon.",
			},
			damage: 160,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ice Path-GX",
				fr: "Route Verglacée-GX",
			},
			effect: {
				en: "Move all damage counters from this Pokémon to your opponent's Active Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Déplacez tous les marqueurs de dégâts de ce Pokémon vers le Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
