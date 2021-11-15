import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Rayquaza ex δ",
		fr: "Rayquaza ex δ"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		384,
	],
	hp: 110,
	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Rage Aura",
				fr: "Aura frénétique"
			},
			effect: {
				en: "If you have more Prize cards left than your opponent, the attack cost of Rayquaza ex's Special Circuit is now Lightning and Rayquaza ex's Sky-high Claws is now Lightning Lightning.",
				fr: "S'il vous reste plus de cartes Récompense qu'à votre adversaire, ignorez toute l'Énergie  nécessaire pour utiliser les attaques Circuit spécial et Griffes gratte-ciel de Rayquaza ex."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Special Circuit",
				fr: "Circuit spécial"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. If you choose a Pokémon that has any Poké-Powers or Poké-Bodies, this attack does 50 damage instead. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts. Si vous choisissez un Pokémon possédant des Poké-Powers ou des Poké-Bodies, cette attaque inflige 50 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sky-high Claws",
				fr: "Griffes gratte-ciel"
			},

			damage: 70,

		},
	],






}

export default card
