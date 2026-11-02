import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Nihilego-GX",
		fr: "Zéroïd-GX",
		de: "Anego-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare",
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
				de: "Licht der Leere"
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench during your turn, you may leave both Active Pokémon Confused and Poisoned.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez laisser les deux Pokémon Actifs Confus et Empoisonnés.",
				de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du beide Aktiven Pokémon verwirren und vergiften."
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
				de: "Einsperren"
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				de: "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
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
				de: "Schmarotzer-GX"
			},
			effect: {
				en: "Add the top 2 cards of your opponent's deck to their Prize cards. (You can't use more than 1 GX attack in a game.)",
				fr: "Ajoutez les 2 cartes du dessus du deck de votre adversaire à ses cartes Récompense. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				de: "Füge die obersten 2 Karten des Decks deines Gegners seinen Preiskarten hinzu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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
