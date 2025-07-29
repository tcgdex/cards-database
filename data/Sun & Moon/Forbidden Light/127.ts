import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Ultra Necrozma GX",
		fr: "Ultra-Necrozma GX",
		es: "Ultra-Necrozma GX",
		it: "UltraNecrozma GX",
		pt: "Ultra Necrozma GX",
		de: "Ultra-Necrozma GX"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Ultra Rare",
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
				"Metal",
				"Psychic",
			],
			name: {
				en: "Photon Geyser",
				fr: "Photo-Geyser",
				es: "Géiser Fotónico",
				it: "Geyser Fotonico",
				pt: "Gêiser de Fótons",
				de: "Photonen-Geysir"
			},
			effect: {
				en: "Discard all basic Psychic Energy from this Pokémon. This attack does 80 more damage for each card you discarded in this way.",
				fr: "Défaussez toute l’Énergie Psychic de base de ce Pokémon. Cette attaque inflige 80 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
				es: "Descarta todas las Energías Básicas Psychic de este Pokémon. Este ataque hace 80 puntos de daño más por cada carta que hayas descartado de esta manera.",
				it: "Scarta tutte le Energie base Psychic assegnate a questo Pokémon. Questo attacco infligge 80 danni in più per ogni carta che hai scartato in questo modo.",
				pt: "Descarte todas as Energias Psychic básicas deste Pokémon. Este ataque causa 80 pontos de dano a mais para cada carta descartada desta forma.",
				de: "Lege alle Psychic-Basis-Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt 80 Schadenspunkte mehr mal der Anzahl der auf diese Weise auf deinen Ablagestapel gelegten Karten zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Metal",
				"Psychic",
			],
			name: {
				en: "Sky-Scorching Light GX",
				fr: "Lumière Apocalyptique-GX",
				es: "Luz Apocalíptica GX",
				it: "Fotodistruzione Celeste-GX",
				pt: "Céu em Chamas GX",
				de: "Licht des Erlöschens GX"
			},
			effect: {
				en: "You can use this attack only if the total of both players’ remaining Prize cards is 6 or less. Put 6 damage counters on each of your opponent’s Pokémon. (You can’t use more than 1 GX attack in a game.)",
				fr: "Vous ne pouvez utiliser cette attaque que s’il reste un total de 6 cartes Récompense ou moins aux deux joueurs. Placez 6 marqueurs de dégâts sur chacun des Pokémon de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Puedes usar este ataque solo si el total de cartas de Premio que les queden a ambos jugadores es de 6 o menos. Pon 6 contadores de daño en cada uno de los Pokémon de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Puoi usare questo attacco solo se il totale delle carte Premio rimanenti a entrambi i giocatori è sei o meno. Metti sei segnalini danno su ciascuno dei Pokémon del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				pt: "Você só pode usar este ataque se a soma total das cartas de Prêmio restantes de ambos os jogadores for 6 ou menos. Coloque 6 contadores de dano em cada um dos Pokémon do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				de: "Du kannst diese Attacke nur einsetzen, wenn die Summe der verbleibenden Preiskarten beider Spieler 6 oder weniger ist. Lege 6 Schadensmarken auf jedes Pokémon deines Gegners. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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
		cardmarket: 319908
	}
}

export default card
