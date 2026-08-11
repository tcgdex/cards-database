import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Alolan Ninetales GX",
		'fr-fr': "Feunard d’Alola GX",
		'es-es': "Ninetales de Alola GX",
		'it-it': "Ninetales di Alola GX",
		'pt-br': "Ninetales de Alola GX",
		'de-de': "Alola Vulnona GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
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
		'en-us': "Alolan Vulpix",
		'fr-fr': "Goupix d’Alola",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ice Blade",
				'fr-fr': "Lame de Glace",
				'es-es': "Hoja Hielo",
				'it-it': "Ghiacciolama",
				'pt-br': "Lâmina de Gelo",
				'de-de': "Eisklinge"
			},
			effect: {
				'en-us': "This attack does 50 damage to 1 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 50 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 50 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 50 danni a uno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 50 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Blizzard Edge",
				'fr-fr': "Lame Tempête",
				'es-es': "Ventisca Afilada",
				'it-it': "Borataglio",
				'pt-br': "Nevasca Afiada",
				'de-de': "Blizzardklinge"
			},
			effect: {
				'en-us': "Discard 2 Energy from this Pokémon.",
				'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
				'es-es': "Descarta 2 Energías de este Pokémon.",
				'it-it': "Scarta due Energie assegnate a questo Pokémon.",
				'pt-br': "Descarte 2 Energias deste Pokémon.",
				'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 160,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ice Path GX",
				'fr-fr': "Route Verglacée GX",
				'es-es': "Camino Helado GX",
				'it-it': "Via Glaciale-GX",
				'pt-br': "Caminho Congelado GX",
				'de-de': "Eisiger Pfad GX"
			},
			effect: {
				'en-us': "Move all damage counters from this Pokémon to your opponent’s Active Pokémon. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Déplacez tous les marqueurs de dégâts de ce Pokémon vers le Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Mueve todos los contadores de daño de este Pokémon al Pokémon Activo de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Sposta tutti i segnalini danno da questo Pokémon al Pokémon attivo del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Mova todos os contadores de dano deste Pokémon para o Pokémon Ativo do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Verschiebe alle Schadensmarken von diesem Pokémon auf das Aktive Pokémon deines Gegners. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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

	thirdParty: {
		cardmarket: 296842,
		tcgplayer: 130920
	}
}

export default card
