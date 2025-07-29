import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Entei GX",
		fr: "Entei GX",
		es: "Entei GX",
		it: "Entei GX",
		pt: "Entei GX",
		de: "Entei GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		244,
	],

	hp: 180,

	types: [
		"Fire",
	],

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Combustion",
				fr: "Fournaise",
				es: "Combustión",
				it: "Fuoco Continuo",
				pt: "Combustão",
				de: "Glühen"
			},

			damage: 50,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Fang",
				fr: "Crocs Feu",
				es: "Colmillo Ígneo",
				it: "Rogodenti",
				pt: "Presas de Fogo",
				de: "Feuerzahn"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Burned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
				it: "Il Pokémon attivo del tuo avversario viene bruciato.",
				pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
			},
			damage: 100,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Brave Burn GX",
				fr: "Brave Brûlure GX",
				es: "Llama Osada GX",
				it: "Coraggio Incendiario-GX",
				pt: "Queimadura Corajosa GX",
				de: "Tapferer Brand GX"
			},
			effect: {
				en: "This attack does 150 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.) (You can’t use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 150 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Este ataque hace 150 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca). (No puedes usar más de 1 ataque GX en una partida).",
				it: "Questo attacco infligge 150 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina. Non puoi usare più di un attacco GX a partita.",
				pt: "Este ataque causa 150 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco). (Você não pode usar mais de 1 ataque GX por partida.)",
				de: "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 150 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 302148
	}
}

export default card
