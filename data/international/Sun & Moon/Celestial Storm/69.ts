import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Deoxys",
		'fr-fr': "Deoxys",
		'es-es': "Deoxys",
		'it-it': "Deoxys",
		'pt-br': "Deoxys",
		'de-de': "Deoxys"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		386,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Teleportation Burst",
				'fr-fr': "Téléportation Explosive",
				'es-es': "Explosión Teleportadora",
				'it-it': "Scoppio Teletrasporto",
				'pt-br': "Teletransporte Explosivo",
				'de-de': "Blitz-Teleportation"
			},
			effect: {
				'en-us': "You may switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Vous pouvez échanger ce Pokémon avec l’un de vos Pokémon de Banc.",
				'es-es': "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
				'it-it': "Puoi scambiare questo Pokémon con uno della tua panchina.",
				'pt-br': "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
				'de-de': "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Spear Dive",
				'fr-fr': "Lance Plongeante",
				'es-es': "Lanza en Picado",
				'it-it': "Picchiata Perforante",
				'pt-br': "Mergulho de Lança",
				'de-de': "Speersprung"
			},
			effect: {
				'en-us': "This attack does 50 damage to 1 of your opponent’s Pokémon. This damage isn’t affected by Weakness or Resistance.",
				'fr-fr': "Cette attaque inflige 50 dégâts à l’un des Pokémon de votre adversaire. Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance.",
				'es-es': "Este ataque hace 50 puntos de daño a 1 de los Pokémon de tu rival. Este daño no se ve afectado por Debilidad o Resistencia.",
				'it-it': "Questo attacco infligge 50 danni a uno dei Pokémon del tuo avversario. Questi danni non sono influenzati dalla debolezza o dalla resistenza.",
				'pt-br': "Este ataque causa 50 pontos de dano a 1 dos Pokémon do seu oponente. Este dano não é afetado por Fraqueza ou Resistência.",
				'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu. Der Schaden dieser Attacke wird durch Schwäche und Resistenz nicht verändert."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "DNA from a space virus mutated and became a Pokémon. It appears where auroras are seen.",
	},

	thirdParty: {
		cardmarket: 361312,
		tcgplayer: 170891
	}
}

export default card
