import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Nihilego-GX",
		fr: "Zéroïd-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		793,
	],
	hp: 180,
	types: [
		"Psychic",
	],


	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Empty Light",
				fr: "Lumière Vide",
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench during your turn, you may leave both Active Pokémon Confused and Poisoned.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez laisser les deux Pokémon Actifs Confus et Empoisonnés.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Lock Up",
				fr: "Cage",
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
			},
			damage: 120,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Symbiont-GX",
				fr: "Parasite-GX",
			},
			effect: {
				en: "Add the top 2 cards of your opponent's deck to their Prize cards. (You can't use more than 1 GX attack in a game.)",
				fr: "Ajoutez les 2 cartes du dessus du deck de votre adversaire à ses cartes Récompense. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

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
