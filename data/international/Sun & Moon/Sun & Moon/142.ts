import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Umbreon GX",
		'fr-fr': "Noctali GX",
		'es-es': "Umbreon GX",
		'it-it': "Umbreon GX",
		'pt-br': "Umbreon GX",
		'de-de': "Nachtara GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		197,
	],

	hp: 200,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Strafe",
				'fr-fr': "Bombarder",
				'es-es': "Pasada de Ataque",
				'it-it': "Mitragliare",
				'pt-br': "Bombardear",
				'de-de': "Beharken"
			},
			effect: {
				'en-us': "You may switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Vous pouvez échanger ce Pokémon avec l’un de vos Pokémon de Banc.",
				'es-es': "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
				'it-it': "Puoi scambiare questo Pokémon con uno della tua panchina.",
				'pt-br': "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
				'de-de': "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Shadow Bullet",
				'fr-fr': "Kunaï Sournois",
				'es-es': "Bala Sombra",
				'it-it': "Dardombra",
				'pt-br': "Projétil Sombrio",
				'de-de': "Schattenkugel"
			},
			effect: {
				'en-us': "This attack does 30 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 30 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 30 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 90,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Dark Call GX",
				'fr-fr': "Appel Obscur GX",
				'es-es': "Llamada Siniestra GX",
				'it-it': "Richiamo Oscuro-GX",
				'pt-br': "Chamado Sombrio GX",
				'de-de': "Nachtgeheul GX"
			},
			effect: {
				'en-us': "Discard 2 Energy from your opponent’s Pokémon. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Défaussez 2 Énergies des Pokémon de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Descarta 2 Energías de los Pokémon de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Scarta due Energie assegnate ai Pokémon del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Descarte 2 Energias dos Pokémon do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Lege 2 Energien von den Pokémon deines Gegners auf seinen Ablagestapel. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 295455,
		tcgplayer: 127014
	}
}

export default card
