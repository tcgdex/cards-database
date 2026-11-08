import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Noivern",
		'fr-fr': "Bruyverne",
		'es-es': "Noivern",
		'it-it': "Noivern",
		'pt-br': "Noivern",
		'de-de': "UHaFnir"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		715,
	],

	hp: 120,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Noibat",
		'fr-fr': "Sonistrelle",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Boomburst",
				'fr-fr': "Bang Sonique",
				'es-es': "Estruendo",
				'it-it': "Ondaboato",
				'pt-br': "Rajada Explosiva",
				'de-de': "Überschallknall"
			},
			effect: {
				'en-us': "This attack does 20 damage to each of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 20 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 20 danni a ciascuno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 20 pontos de dano a cada um dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt jedem Pokémon deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Psychic",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Pulse",
				'fr-fr': "Dracochoc",
				'es-es': "Pulso Dragón",
				'it-it': "Dragopulsar",
				'pt-br': "Pulso do Dragão",
				'de-de': "Drachenpuls"
			},
			effect: {
				'en-us': "Discard the top card of your deck.",
				'fr-fr': "Défaussez la carte du dessus de votre deck.",
				'es-es': "Descarta la primera carta de tu baraja.",
				'it-it': "Scarta la prima carta del tuo mazzo.",
				'pt-br': "Descarte a primeira carta do seu baralho.",
				'de-de': "Lege die oberste Karte deines Decks auf deinen Ablagestapel."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		'en-us': "Although it has a violent disposition, if you give it a nice ripe fruit that it loves, Noivern will suddenly become tame.",
	},

	thirdParty: {
		cardmarket: 388587,
		tcgplayer: 195157
	}
}

export default card
