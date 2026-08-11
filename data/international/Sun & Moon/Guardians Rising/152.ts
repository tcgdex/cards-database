import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Vikavolt GX",
		'fr-fr': "Lucanon GX",
		'es-es': "Vikavolt GX",
		'it-it': "Vikavolt GX",
		'pt-br': "Vikavolt GX",
		'de-de': "Donarion GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		738,
	],

	hp: 240,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Charjabug",
		'fr-fr': "Chrysapile",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Charge Beam",
				'fr-fr': "Rayon Chargé",
				'es-es': "Rayo Carga",
				'it-it': "Raggioscossa",
				'pt-br': "Carga de Raio",
				'de-de': "Ladestrahl"
			},
			effect: {
				'en-us': "Attach an Energy card from your discard pile to this Pokémon.",
				'fr-fr': "Attachez une carte Énergie de votre pile de défausse à ce Pokémon.",
				'es-es': "Une 1 carta de Energía de tu pila de descartes a este Pokémon.",
				'it-it': "Assegna a questo Pokémon una carta Energia dalla tua pila degli scarti.",
				'pt-br': "Ligue 1 carta de Energia da sua pilha de descarte a este Pokémon.",
				'de-de': "Lege 1 Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
			},
			damage: 50,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Super Zap Cannon",
				'fr-fr': "Super Élecanon",
				'es-es': "Superelectrocañón",
				'it-it': "Falcecannone Super",
				'pt-br': "Supercanhão Zap",
				'de-de': "Super-Blitzkanone"
			},
			effect: {
				'en-us': "Discard 2 Energy from this Pokémon.",
				'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
				'es-es': "Descarta 2 Energías de este Pokémon.",
				'it-it': "Scarta due Energie assegnate a questo Pokémon.",
				'pt-br': "Descarte 2 Energias deste Pokémon.",
				'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 180,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gigatron GX",
				'fr-fr': "Gigatron GX",
				'es-es': "Gigatrón GX",
				'it-it': "Gigatrone-GX",
				'pt-br': "Gigatron GX",
				'de-de': "Gigatron GX"
			},
			effect: {
				'en-us': "This attack does 60 damage to each of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.) (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Cette attaque inflige 60 dégâts à chacun des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Este ataque hace 60 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca). (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Questo attacco infligge 60 danni a ciascun Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Este ataque causa 60 pontos de dano a cada um dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco). (Você não pode usar mais de 1 ataque GX por partida.)",
				'de-de': "Diese Attacke fügt jedem Pokémon auf der Bank deines Gegners 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

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

	retreat: 1,

	thirdParty: {
		cardmarket: 297600,
		tcgplayer: 130949
	}
}

export default card
