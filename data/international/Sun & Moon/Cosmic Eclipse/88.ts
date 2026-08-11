import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Swoobat",
		'fr-fr': "Rhinolove",
		'es-es': "Swoobat",
		'it-it': "Swoobat",
		'pt-br': "Swoobat",
		'de-de': "Fletiamo"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		528,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Woobat",
		'fr-fr': "Chovsourir",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Supersonic",
				'fr-fr': "Ultrason",
				'es-es': "Supersónico",
				'it-it': "Supersuono",
				'pt-br': "Supersônico",
				'de-de': "Superschall"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Charming Stamp",
				'fr-fr': "Trace Charmante",
				'es-es': "Sello Cautivador",
				'it-it': "Impronta Graziosa",
				'pt-br': "Marca Encantadora",
				'de-de': "Charmanter Stempel"
			},
			effect: {
				'en-us': "Your opponent chooses 1 of their own Pokémon. This attack does 90 damage to that Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Votre adversaire choisit l’un de ses propres Pokémon. Cette attaque inflige 90 dégâts à ce Pokémon-là. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Tu rival elige 1 de sus propios Pokémon. Este ataque hace 90 puntos de daño a ese Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Il tuo avversario sceglie uno dei suoi Pokémon. Questo attacco infligge 90 danni a quel Pokémon. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "O seu oponente escolhe 1 dos seus próprios Pokémon. Este ataque causa 90 pontos de dano àquele Pokémon (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Dein Gegner wählt 1 seiner eigenen Pokémon. Diese Attacke fügt jenem Pokémon 90 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It shakes its tail vigorously when it emits ultrasonic waves strong enough to reduce concrete to rubble.",
	},

	thirdParty: {
		cardmarket: 408084,
		tcgplayer: 201262
	}
}

export default card
