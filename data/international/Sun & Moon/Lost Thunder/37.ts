import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Tapu Bulu",
		'fr-fr': "Tokotoro",
		'es-es': "Tapu Bulu",
		'it-it': "Tapu Bulu",
		'pt-br': "Tapu Bulu",
		'de-de': "Kapu-Toro"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		787,
	],

	hp: 130,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Heavy Punch",
				'fr-fr': "Poing Lourd",
				'es-es': "Golpe Duro",
				'it-it': "Gran Pugno",
				'pt-br': "Soco Pesado",
				'de-de': "Schwerer Schlag"
			},
			effect: {
				'en-us': "This attack does 20 damage for each of your opponent’s Benched Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts pour chaque Pokémon de Banc de votre adversaire.",
				'es-es': "Este ataque hace 20 puntos de daño por cada uno de los Pokémon en Banca de tu rival.",
				'it-it': "Questo attacco infligge 20 danni per ogni Pokémon nella panchina del tuo avversario.",
				'pt-br': "Este ataque causa 20 pontos de dano para cada Pokémon no Banco do seu oponente.",
				'de-de': "Diese Attacke fügt 20 Schadenspunkte mal der Anzahl der Pokémon auf der Bank deines Gegners zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Wild Tackle",
				'fr-fr': "Tacle Brutal",
				'es-es': "Placaje Salvaje",
				'it-it': "Azionferoce",
				'pt-br': "Investida Feroz",
				'de-de': "Wilder Tackle"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this Pokémon does 30 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c’est pile, ce Pokémon s’inflige 30 dégâts.",
				'es-es': "Lanza 1 moneda. Si sale cruz, este Pokémon se hace 30 puntos de daño a sí mismo.",
				'it-it': "Lancia una moneta. Se esce croce, questo Pokémon infligge 30 danni a se stesso.",
				'pt-br': "Jogue 1 moeda. Se sair coroa, este Pokémon causará 30 pontos de dano a si mesmo.",
				'de-de': "Wirf 1 Münze. Bei Zahl fügt sich dieses Pokémon selbst 30 Schadenspunkte zu."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The guardian deity of Ula'ula is a lazy Pokémon. It commands plants to immobilize its foes and then deals them a savage blow with its horns.",
	},

	thirdParty: {
		cardmarket: 365677,
		tcgplayer: 178840
	}
}

export default card
