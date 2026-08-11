import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Dedenne",
		'fr-fr': "Dedenne",
		'es-es': "Dedenne",
		'it-it': "Dedenne",
		'pt-br': "Dedenne",
		'de-de': "Dedenne"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		702,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Nuzzle",
				'fr-fr': "Frotte-Frimousse",
				'es-es': "Moflete Estático",
				'it-it': "Elettrococcola",
				'pt-br': "Chamego",
				'de-de': "Wangenrubbler"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Nuzzle Shot",
				'fr-fr': "Tir Frotte-Frimousse",
				'es-es': "Disparo Moflete Estático",
				'it-it': "Colpo Elettrococcola",
				'pt-br': "Golpe de Chamego",
				'de-de': "Wangenrubblerschuss"
			},
			effect: {
				'en-us': "This attack does 10 damage for each of your Pokémon in play that has the Nuzzle attack to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 10 dégâts, pour chacun de vos Pokémon en jeu ayant l’attaque Frotte-Frimousse, à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 10 puntos de daño por cada uno de tus Pokémon en juego que tenga el ataque Moflete Estático a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 10 danni a uno dei Pokémon nella panchina del tuo avversario per ogni tuo Pokémon in gioco che abbia l’attacco Elettrococcola. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 10 pontos de dano para cada um dos seus Pokémon em jogo que tenha o ataque Chamego a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 10 Schadenspunkte mal der Anzahl deiner Pokémon im Spiel zu, die die Attacke Wangenrubbler haben. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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

	description: {
		'en-us': "It uses its tail to absorb electricity from power plants or from outlets in houses, and then it fires the electricity from its whiskers.",
	},

	thirdParty: {
		cardmarket: 365722,
		tcgplayer: 178893
	}
}

export default card
