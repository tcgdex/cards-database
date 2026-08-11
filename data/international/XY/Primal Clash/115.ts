import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Spinda",
		'fr-fr': "Spinda",
		'es-es': "Spinda",
		'it-it': "Spinda",
		'pt-br': "Spinda",
		'de-de': "Pandir"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		327,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Staggering Steps",
				'fr-fr': "Démarche Branlante",
				'es-es': "Pasos Tambaleantes",
				'it-it': "Barcollio",
				'pt-br': "Passos Surpreendentes",
				'de-de': "Taumelnde Schritte"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Confused. If tails, this Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Confus. Si c'est pile, ce Pokémon est maintenant Confus.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Confundido. Si sale cruz, este Pokémon pasa a estar Confundido.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene confuso. Se esce croce, questo Pokémon viene confuso.",
				'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Confuso. Se sair coroa, esse Pokémon ficará Confuso.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt verwirrt. Bei \"Zahl\" ist dieses Pokémon jetzt verwirrt."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Uproar",
				'fr-fr': "Brouhaha",
				'es-es': "Alboroto",
				'it-it': "Baraonda",
				'pt-br': "Tumulto",
				'de-de': "Aufruhr"
			},
			effect: {
				'en-us': "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 10 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 10 danni a ciascuno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 10 de danos a cada Pokémon do seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				'de-de': "Dieser Angriff fügt jedem Pokémon deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The chances of two Spinda having identical spot patterns is less than one in four billion.",
	},

	thirdParty: {
		cardmarket: 273646,
		tcgplayer: 96013
	}
}

export default card
