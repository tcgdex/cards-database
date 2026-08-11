import { Card } from 'models/database/card'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		'en-us': "Rayquaza ex δ",
		'fr-fr': "Rayquaza ex δ",
		'de-de': "Rayquaza ex"
	},

	suffix: "ex",
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
				'en-us': "Rage Aura",
				'fr-fr': "Aura frénétique",
				'de-de': "Wut-Aura"
			},
			effect: {
				'en-us': "If you have more Prize cards left than your opponent, the attack cost of Rayquaza ex's Special Circuit is now Lightning and Rayquaza ex's Sky-high Claws is now Lightning Lightning.",
				'fr-fr': "S'il vous reste plus de cartes Récompense qu'à votre adversaire, ignorez toute l'Énergie  nécessaire pour utiliser les attaques Circuit spécial et Griffes gratte-ciel de Rayquaza ex.",
				'de-de': "Wenn du mehr Preise übrig hast als dein Gegner, ignoriere alle -Energiekosten der Spezial-Stromkreis und Himmelhohe Klauen Angriffe von Rayquaza ex."
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
				'en-us': "Special Circuit",
				'fr-fr': "Circuit spécial",
				'de-de': "Spezial-Stromkreis"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. If you choose a Pokémon that has any Poké-Powers or Poké-Bodies, this attack does 50 damage instead. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts. Si vous choisissez un Pokémon possédant des Poké-Powers ou des Poké-Bodies, cette attaque inflige 50 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt diesem Pokémon 30 Schadenspunkte zu. Falls das gewählte Pokémon Poké-Power oder Poké-Body hat, fügt dieser Angriff stattdessen 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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
				'en-us': "Sky-high Claws",
				'fr-fr': "Griffes gratte-ciel",
				'de-de': "Himmelhohe Klauen"
			},

			damage: 70,

		},
	],


	retreat: 2,

	thirdParty: {
		cardmarket: 277302
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["tom-roos"]
		},
	]
}

export default card
