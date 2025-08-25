import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Garchomp & Giratina GX",
		fr: "Carchacrok et Giratina GX",
		es: "Garchomp y Giratina GX",
		it: "Garchomp e Giratina GX",
		pt: "Garchomp e Giratina GX",
		de: "Knakrack & Giratina GX"
	},

	illustrator: "aky CG Works",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		445,
	],

	hp: 270,

	types: [
		"Dragon",
	],

	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Linear Attack",
				fr: "Attaque Linéaire",
				es: "Ataque Lineal",
				it: "Attacco Lineare",
				pt: "Ataque Linear",
				de: "Linearer Angriff"
			},
			effect: {
				en: "This attack does 40 damage to 1 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 40 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 40 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 40 danni a uno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 40 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt 1 Pokémon deines Gegners 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Psychic",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Calamitous Slash",
				fr: "Calami’Tranche",
				es: "Cuchillada Catastrófica",
				it: "Lacerazione Micidiale",
				pt: "Corte Calamitoso",
				de: "Unheilvoller Schlitzer"
			},
			effect: {
				en: "If your opponent’s Active Pokémon already has any damage counters on it, this attack does 80 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire a déjà des marqueurs de dégâts, cette attaque inflige 80 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 80 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 80 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente já tiver contadores de dano nele, este ataque causará 80 pontos de dano a mais.",
				de: "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 80 Schadenspunkte mehr zu."
			},
			damage: "160+",

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Fighting",
			],
			name: {
				en: "GG End GX",
				fr: "GG Final GX",
				es: "Final GG GX",
				it: "Fine dei Giochi GX",
				pt: "GG e Pronto GX",
				de: "GG Abschluss GX"
			},
			effect: {
				en: "Discard 1 of your opponent’s Pokémon and all cards attached to it. If this Pokémon has at least 3 extra Fighting Energy attached to it (in addition to this attack’s cost), discard 2 of your opponent’s Pokémon instead. (You can’t use more than 1 GX attack in a game.)",
				fr: "Défaussez l’un des Pokémon de votre adversaire et toutes les cartes qui lui sont attachées. Si au moins 3 Énergies Fighting supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), défaussez 2 des Pokémon de votre adversaire au lieu d’un. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Descarta 1 de los Pokémon de tu rival y todas las cartas unidas a él. Si este Pokémon tiene por lo menos 3 Energías Fighting adicionales unidas a él (además de las del coste de este ataque), descarta 2 de los Pokémon de tu rival en vez de 1. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Scarta uno dei Pokémon del tuo avversario e tutte le carte a esso assegnate. Se questo Pokémon ha almeno tre Energie Fighting extra assegnate, in aggiunta a quelle del costo di questo attacco, invece scarta due dei suoi Pokémon. Non puoi usare più di un attacco GX a partita.",
				pt: "Descarte 1 dos Pokémon do seu oponente e todas as cartas ligadas a ele. Se este Pokémon tiver pelo menos 3 Energias Fighting adicionais ligadas a ele (além do custo deste ataque), descarte 2 dos Pokémon do seu oponente ao invés de 1 (você não pode usar mais de 1 ataque GX por partida).",
				de: "Lege 1 Pokémon deines Gegners und alle an es angelegten Karten auf seinen Ablagestapel. Wenn an dieses Pokémon mindestens 3 extra Fighting-Energien angelegt sind (zusätzlich zu den Kosten dieser Attacke), lege stattdessen 2 Pokémon deines Gegners auf seinen Ablagestapel. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		}
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 377496,
		tcgplayer: 195139
	}
}

export default card
