import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Noivern",
		fr: "Bruyverne",
		es: "Noivern",
		it: "Noivern",
		pt: "Noivern",
		de: "UHaFnir"
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
		en: "Noibat",
		fr: "Sonistrelle",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Boomburst",
				fr: "Bang Sonique",
				es: "Estruendo",
				it: "Ondaboato",
				pt: "Rajada Explosiva",
				de: "Überschallknall"
			},
			effect: {
				en: "This attack does 20 damage to each of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 20 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 20 danni a ciascuno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 20 pontos de dano a cada um dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt jedem Pokémon deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Psychic",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Dragon Pulse",
				fr: "Dracochoc",
				es: "Pulso Dragón",
				it: "Dragopulsar",
				pt: "Pulso do Dragão",
				de: "Drachenpuls"
			},
			effect: {
				en: "Discard the top card of your deck.",
				fr: "Défaussez la carte du dessus de votre deck.",
				es: "Descarta la primera carta de tu baraja.",
				it: "Scarta la prima carta del tuo mazzo.",
				pt: "Descarte a primeira carta do seu baralho.",
				de: "Lege die oberste Karte deines Decks auf deinen Ablagestapel."
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

	thirdParty: {
		cardmarket: 388587
	}
}

export default card
