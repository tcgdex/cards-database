import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Sceptile-GX",
		fr: "Jungko-GX",
	},
	illustrator: "Yoshinobu Saito",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		254,
	],
	hp: 230,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Grovyle",
		fr: "Massko",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Mach Cut",
				fr: "Coupe Vive",
			},
			effect: {
				en: "Discard a Special Energy from your opponent's Active Pokémon.",
				fr: "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
			},
			damage: 60,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Leaf Cyclone",
				fr: "Cyclone Feuillu",
			},
			effect: {
				en: "Move a Grass Energy from this Pokémon to 1 of your Benched Pokémon.",
				fr: "Déplacez une Énergie Grass de ce Pokémon vers l’un de vos Pokémon de Banc.",
			},
			damage: 130,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Jungle Heal-GX",
				fr: "Jungle Cicatrisante-GX",
			},
			effect: {
				en: "Heal all damage from each of your Pokémon that has any Grass Energy attached to it. (You can't use more than 1 GX attack in a game.)",
				fr: "Soignez tous les dégâts à chacun de vos Pokémon auquel de l’Énergie Grass est attachée. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
