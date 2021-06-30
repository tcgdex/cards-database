import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Dedenne",
		fr: "Dedenne",
		es: "Dedenne",
		it: "Dedenne",
		pt: "Dedenne",
		de: "Dedenne"
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
				en: "Nuzzle",
				fr: "Frotte-Frimousse",
				es: "Moflete Estático",
				it: "Elettrococcola",
				pt: "Chamego",
				de: "Wangenrubbler"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Nuzzle Shot",
				fr: "Tir Frotte-Frimousse",
				es: "Disparo Moflete Estático",
				it: "Colpo Elettrococcola",
				pt: "Golpe de Chamego",
				de: "Wangenrubblerschuss"
			},
			effect: {
				en: "This attack does 10 damage for each of your Pokémon in play that has the Nuzzle attack to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 10 dégâts, pour chacun de vos Pokémon en jeu ayant l’attaque Frotte-Frimousse, à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 10 puntos de daño por cada uno de tus Pokémon en juego que tenga el ataque Moflete Estático a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 10 danni a uno dei Pokémon nella panchina del tuo avversario per ogni tuo Pokémon in gioco che abbia l’attacco Elettrococcola. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 10 pontos de dano para cada um dos seus Pokémon em jogo que tenha o ataque Chamego a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 10 Schadenspunkte mal der Anzahl deiner Pokémon im Spiel zu, die die Attacke Wangenrubbler haben. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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



}

export default card
