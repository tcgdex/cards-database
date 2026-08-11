import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Prinplup",
		'fr-fr': "Prinplouf",
		'es-es': "Prinplup",
		'it-it': "Prinplup",
		'pt-br': "Prinplup",
		'de-de': "Pliprin"
	},

	illustrator: "Hasuno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		394,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Piplup",
		'fr-fr': "Tiplouf",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Water Drip",
				'fr-fr': "Goutte à Goutte",
				'es-es': "Goteo de Agua",
				'it-it': "Gocciolacqua",
				'pt-br': "Gotejo",
				'de-de': "Spritzwasser"
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				'en-us': "Direct Dive",
				'fr-fr': "Plongeon Direct",
				'es-es': "Zambullida Directa",
				'it-it': "Tuffodiretto",
				'pt-br': "Mergulho Certeiro",
				'de-de': "Hechtsprung"
			},
			effect: {
				'en-us': "Discard all Energy from this Pokémon. This attack does 100 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Défaussez toute l’Énergie de ce Pokémon. Cette attaque inflige 100 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Descarta todas las Energías de este Pokémon. Este ataque hace 100 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Scarta tutte le Energie assegnate a questo Pokémon. Questo attacco infligge 100 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Descarte todas as Energias deste Pokémon. Este ataque causa 100 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 100 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It lives alone, away from others. Apparently, every one of them believes it is the most important.",
	},

	thirdParty: {
		cardmarket: 407924,
		tcgplayer: 201231
	}
}

export default card
