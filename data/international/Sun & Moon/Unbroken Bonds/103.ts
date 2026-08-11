import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Landorus",
		'fr-fr': "Démétéros",
		'es-es': "Landorus",
		'it-it': "Landorus",
		'pt-br': "Landorus",
		'de-de': "Demeteros"
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		645,
	],

	hp: 120,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Linear Attack",
				'fr-fr': "Attaque Linéaire",
				'es-es': "Ataque Lineal",
				'it-it': "Attacco Lineare",
				'pt-br': "Ataque Linear",
				'de-de': "Linearer Angriff"
			},
			effect: {
				'en-us': "This attack does 30 damage to 1 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 30 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 30 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 30 danni a uno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 30 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Power Cyclone",
				'fr-fr': "Cyclone d’Énergie",
				'es-es': "Ciclón Poderoso",
				'it-it': "Ciclone Potente",
				'pt-br': "Ciclone Poderoso",
				'de-de': "Kraftwirbel"
			},
			effect: {
				'en-us': "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
				'fr-fr': "Déplacez une Énergie de ce Pokémon vers l’un de vos Pokémon de Banc.",
				'es-es': "Mueve 1 Energía de este Pokémon a 1 de tus Pokémon en Banca.",
				'it-it': "Sposta un’Energia da questo Pokémon a uno di quelli nella tua panchina.",
				'pt-br': "Mova 1 Energia deste Pokémon para 1 dos seus Pokémon no Banco.",
				'de-de': "Verschiebe 1 Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Lands visited by Landorus grant such bountiful crops that it has been hailed as \"The Guardian of the Fields.\"",
	},

	thirdParty: {
		cardmarket: 372394,
		tcgplayer: 189202
	}
}

export default card
