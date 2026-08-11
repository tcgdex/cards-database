import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Garchomp & Giratina GX",
		'fr-fr': "Carchacrok et Giratina GX",
		'es-es': "Garchomp y Giratina GX",
		'it-it': "Garchomp e Giratina GX",
		'pt-br': "Garchomp e Giratina GX",
		'de-de': "Knakrack & Giratina GX"
	},

	illustrator: "aky CG Works",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [445, 487],
	hp: 270,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Linear Attack",
				'fr-fr': "Attaque Linéaire",
				'es-es': "Ataque Lineal",
				'it-it': "Attacco Lineare",
				'pt-br': "Ataque Linear",
				'de-de': "Linearer Angriff"
			},
			effect: {
				'en-us': "This attack does 40 damage to 1 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 40 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 40 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 40 danni a uno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 40 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Psychic",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Calamitous Slash",
				'fr-fr': "Calami’Tranche",
				'es-es': "Cuchillada Catastrófica",
				'it-it': "Lacerazione Micidiale",
				'pt-br': "Corte Calamitoso",
				'de-de': "Unheilvoller Schlitzer"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon already has any damage counters on it, this attack does 80 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire a déjà des marqueurs de dégâts, cette attaque inflige 80 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 80 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 80 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente já tiver contadores de dano nele, este ataque causará 80 pontos de dano a mais.",
				'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 80 Schadenspunkte mehr zu."
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
				'en-us': "GG End GX",
				'fr-fr': "GG Final GX",
				'es-es': "Final GG GX",
				'it-it': "Fine dei Giochi GX",
				'pt-br': "GG e Pronto GX",
				'de-de': "GG Abschluss GX"
			},
			effect: {
				'en-us': "Discard 1 of your opponent’s Pokémon and all cards attached to it. If this Pokémon has at least 3 extra Fighting Energy attached to it (in addition to this attack’s cost), discard 2 of your opponent’s Pokémon instead. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Défaussez l’un des Pokémon de votre adversaire et toutes les cartes qui lui sont attachées. Si au moins 3 Énergies Fighting supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), défaussez 2 des Pokémon de votre adversaire au lieu d’un. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Descarta 1 de los Pokémon de tu rival y todas las cartas unidas a él. Si este Pokémon tiene por lo menos 3 Energías Fighting adicionales unidas a él (además de las del coste de este ataque), descarta 2 de los Pokémon de tu rival en vez de 1. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Scarta uno dei Pokémon del tuo avversario e tutte le carte a esso assegnate. Se questo Pokémon ha almeno tre Energie Fighting extra assegnate, in aggiunta a quelle del costo di questo attacco, invece scarta due dei suoi Pokémon. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Descarte 1 dos Pokémon do seu oponente e todas as cartas ligadas a ele. Se este Pokémon tiver pelo menos 3 Energias Fighting adicionais ligadas a ele (além do custo deste ataque), descarte 2 dos Pokémon do seu oponente ao invés de 1 (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Lege 1 Pokémon deines Gegners und alle an es angelegten Karten auf seinen Ablagestapel. Wenn an dieses Pokémon mindestens 3 extra Fighting-Energien angelegt sind (zusätzlich zu den Kosten dieser Attacke), lege stattdessen 2 Pokémon deines Gegners auf seinen Ablagestapel. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 389027,
		tcgplayer: 195140
	}
}

export default card
