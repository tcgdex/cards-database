import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Tapu Koko",
		'fr-fr': "Tokorico",
		'es-es': "Tapu Koko",
		'it-it': "Tapu Koko",
		'pt-br': "Tapu Koko",
		'de-de': "Kapu-Riki"
	},

	illustrator: "kirisAki",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		785,
	],

	hp: 110,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flying Flip",
				'fr-fr': "Flip Volant",
				'es-es': "Voltereta Voladora",
				'it-it': "Svolta Volante",
				'pt-br': "Cambalhota Voadora",
				'de-de': "Saltospirale"
			},
			effect: {
				'en-us': "This attack does 20 damage to each of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 20 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 20 danni a ciascuno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 20 pontos de dano a cada um dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt jedem Pokémon deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Electric Ball",
				'fr-fr': "Boule de Foudre",
				'es-es': "Bola Eléctrica",
				'it-it': "Lamposfera",
				'pt-br': "Bola Elétrica",
				'de-de': "Stromball"
			},

			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "This guardian deity of Melemele is brimming with curiosity. It summons thunderclouds and stores their lightning inside its body.",
	},
}

export default card
