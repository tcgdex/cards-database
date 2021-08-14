import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Alolan Ninetales GX",
		fr: "Feunard d’Alola GX",
		es: "Ninetales de Alola GX",
		it: "Ninetales di Alola GX",
		pt: "Ninetales de Alola GX",
		de: "Alola Vulnona GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		38,
	],
	hp: 210,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Alolan Vulpix",
		fr: "Goupix d’Alola",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ice Blade",
				fr: "Lame de Glace",
				es: "Hoja Hielo",
				it: "Ghiacciolama",
				pt: "Lâmina de Gelo",
				de: "Eisklinge"
			},
			effect: {
				en: "This attack does 50 damage to 1 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 50 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 50 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 50 danni a uno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 50 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Blizzard Edge",
				fr: "Lame Tempête",
				es: "Ventisca Afilada",
				it: "Borataglio",
				pt: "Nevasca Afiada",
				de: "Blizzardklinge"
			},
			effect: {
				en: "Discard 2 Energy from this Pokémon.",
				fr: "Défaussez 2 Énergies de ce Pokémon.",
				es: "Descarta 2 Energías de este Pokémon.",
				it: "Scarta due Energie assegnate a questo Pokémon.",
				pt: "Descarte 2 Energias deste Pokémon.",
				de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 160,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ice Path GX",
				fr: "Route Verglacée GX",
				es: "Camino Helado GX",
				it: "Via Glaciale-GX",
				pt: "Caminho Congelado GX",
				de: "Eisiger Pfad GX"
			},
			effect: {
				en: "Move all damage counters from this Pokémon to your opponent’s Active Pokémon. (You can’t use more than 1 GX attack in a game.)",
				fr: "Déplacez tous les marqueurs de dégâts de ce Pokémon vers le Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Mueve todos los contadores de daño de este Pokémon al Pokémon Activo de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Sposta tutti i segnalini danno da questo Pokémon al Pokémon attivo del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				pt: "Mova todos os contadores de dano deste Pokémon para o Pokémon Ativo do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				de: "Verschiebe alle Schadensmarken von diesem Pokémon auf das Aktive Pokémon deines Gegners. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
