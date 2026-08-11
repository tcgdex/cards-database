import { Card } from 'models/database/card'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		'en-us': "Ultra Necrozma GX",
		'fr-fr': "Ultra-Necrozma GX",
		'es-es': "Ultra-Necrozma GX",
		'it-it': "UltraNecrozma GX",
		'pt-br': "Ultra Necrozma GX",
		'de-de': "Ultra-Necrozma GX"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		800,
	],

	hp: 190,

	types: [
		"Dragon",
	],

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Psychic",
				"Metal",
			],
			name: {
				'en-us': "Photon Geyser",
				'fr-fr': "Photo-Geyser",
				'es-es': "Géiser Fotónico",
				'it-it': "Geyser Fotonico",
				'pt-br': "Gêiser de Fótons",
				'de-de': "Photonen-Geysir"
			},
			effect: {
				'en-us': "Discard all basic Psychic Energy from this Pokémon. This attack does 80 more damage for each card you discarded in this way.",
				'fr-fr': "Défaussez toute l’Énergie Psychic de base de ce Pokémon. Cette attaque inflige 80 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
				'es-es': "Descarta todas las Energías Básicas Psychic de este Pokémon. Este ataque hace 80 puntos de daño más por cada carta que hayas descartado de esta manera.",
				'it-it': "Scarta tutte le Energie base Psychic assegnate a questo Pokémon. Questo attacco infligge 80 danni in più per ogni carta che hai scartato in questo modo.",
				'pt-br': "Descarte todas as Energias Psychic básicas deste Pokémon. Este ataque causa 80 pontos de dano a mais para cada carta descartada desta forma.",
				'de-de': "Lege alle Psychic-Basis-Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt 80 Schadenspunkte mehr mal der Anzahl der auf diese Weise auf deinen Ablagestapel gelegten Karten zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Psychic",
				"Metal",
			],
			name: {
				'en-us': "Sky-Scorching Light GX",
				'fr-fr': "Lumière Apocalyptique-GX",
				'es-es': "Luz Apocalíptica-GX",
				'it-it': "Fotodistruzione Celeste-GX",
				'pt-br': "Céu em Chamas-GX",
				'de-de': "Licht des Erlöschens-GX"
			},
			effect: {
				'en-us': "You can use this attack only if the total of both players’ remaining Prize cards is 6 or less. Put 6 damage counters on each of your opponent’s Pokémon. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Vous ne pouvez utiliser cette attaque que s’il reste un total de 6 cartes Récompense ou moins aux deux joueurs. Placez 6 marqueurs de dégâts sur chacun des Pokémon de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Puedes usar este ataque solo si el total de cartas de Premio que les queden a ambos jugadores es de 6 o menos. Pon 6 contadores de daño en cada uno de los Pokémon de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Puoi usare questo attacco solo se il totale delle carte Premio rimanenti a entrambi i giocatori è sei o meno. Metti sei segnalini danno su ciascuno dei Pokémon del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Você só pode usar este ataque se a soma total das cartas de Prêmio restantes de ambos os jogadores for 6 ou menos. Coloque 6 contadores de dano em cada um dos Pokémon do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Du kannst diese Attacke nur einsetzen, wenn die Summe der verbleibenden Preiskarten beider Spieler 6 oder weniger ist. Lege 6 Schadensmarken auf jedes Pokémon deines Gegners. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 363549,
		tcgplayer: 175508
	}
}

export default card
