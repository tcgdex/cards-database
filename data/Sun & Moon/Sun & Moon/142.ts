import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Umbreon GX",
		fr: "Noctali GX",
		es: "Umbreon GX",
		it: "Umbreon GX",
		pt: "Umbreon GX",
		de: "Nachtara GX"
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
		en: "Eevee",
		fr: "Évoli",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Strafe",
				fr: "Bombarder",
				es: "Pasada de Ataque",
				it: "Mitragliare",
				pt: "Bombardear",
				de: "Beharken"
			},
			effect: {
				en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Vous pouvez échanger ce Pokémon avec l’un de vos Pokémon de Banc.",
				es: "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
				it: "Puoi scambiare questo Pokémon con uno della tua panchina.",
				pt: "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
				de: "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
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
				en: "Shadow Bullet",
				fr: "Kunaï Sournois",
				es: "Bala Sombra",
				it: "Dardombra",
				pt: "Projétil Sombrio",
				de: "Schattenkugel"
			},
			effect: {
				en: "This attack does 30 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 30 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 90,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Dark Call GX",
				fr: "Appel Obscur GX",
				es: "Llamada Siniestra GX",
				it: "Richiamo Oscuro-GX",
				pt: "Chamado Sombrio GX",
				de: "Nachtgeheul GX"
			},
			effect: {
				en: "Discard 2 Energy from your opponent’s Pokémon. (You can’t use more than 1 GX attack in a game.)",
				fr: "Défaussez 2 Énergies des Pokémon de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Descarta 2 Energías de los Pokémon de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Scarta due Energie assegnate ai Pokémon del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				pt: "Descarte 2 Energias dos Pokémon do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				de: "Lege 2 Energien von den Pokémon deines Gegners auf seinen Ablagestapel. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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



}

export default card
