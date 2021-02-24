import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Mimikyu-GX",
		fr: "Mimiqui-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		778,
	],
	hp: 170,
	types: [
		"Fairy",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Perplex",
				fr: "Affolement",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			},

		},
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Let's Snuggle & Fall",
				fr: "Patati-Patatrac",
			},
			effect: {
				en: "This attack does 30 more damage for each damage counter on your opponent's Active Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque marqueur de dégâts placé sur le Pokémon Actif de votre adversaire.",
			},
			damage: 10,

		},
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Dream Fear-GX",
				fr: "Peur de Rêve-GX",
			},
			effect: {
				en: "Choose 1 of your opponent's Benched Pokémon. Your opponent shuffles that Pokémon and all cards attached to it into their deck. (You can't use more than 1 GX attack in a game.)",
				fr: "Choisissez l’un des Pokémon de Banc de votre adversaire. Votre adversaire mélange ce Pokémon et toutes les cartes qui lui sont attachées avec son deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],


	retreat: 1,



}

export default card
