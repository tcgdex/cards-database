import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [604],

	name: {
		en: "Eelektross",
		fr: "Ohmassacre",
		es: "Eelektross",
		it: "Eelektross",
		pt: "Eelektross",
		de: "Zapplarang"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 160,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Eelektrik",
		fr: "Lampéroie",
		es: "Eelektrik",
		it: "Eelektrik",
		pt: "Eelektrik",
		de: "Zapplalek"
	},

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Electrified Bite Mark",
				fr: "Morsure Électrisante",
				es: "Mordedura Electrificada",
				it: "Morso Caricato",
				pt: "Marca de Mordida Elétrica",
				de: "Elektro-Bisswunde"
			},
			effect: {
				en: "During your opponent's next turn, if they attach an Energy card from their hand to the Defending Pokémon, put 6 damage counters on that Pokémon.",
				fr: "Pendant le prochain tour de votre adversaire, s'il attache une carte Énergie de sa main au Pokémon Défenseur, placez 6 marqueurs de dégâts sur ce Pokémon-là.",
				es: "Durante el próximo turno de tu rival, si une 1 carta de Energía de su mano al Pokémon Defensor, pon 6 contadores de daño en ese Pokémon.",
				it: "Se il tuo avversario assegna al Pokémon difensore una carta Energia dalla sua mano durante il suo prossimo turno, metti sei segnalini danno su quel Pokémon.",
				pt: "Durante o próximo turno do seu oponente, se o seu oponente ligar uma carta de Energia da própria mão ao Pokémon Defensor, coloque 6 contadores de dano naquele Pokémon.",
				de: "Lege während des nächsten Zuges deines Gegners, wenn er 1 Energiekarte aus seiner Hand an das Verteidigende Pokémon anlegt, 6 Schadensmarken auf jenes Pokémon."
			},
			damage: 60,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Electro Sprinkler",
				fr: "Arroseur Électrique",
				es: "Electroaspersor",
				it: "Irrigalampo",
				pt: "Borrifador Elétrico",
				de: "Elektro-Sprinkler"
			},
			effect: {
				en: "This attack also does 30 damage to 1 of your Benched Pokémon and 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige aussi 30 dégâts à l'un de vos Pokémon de Banc et 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque también hace 30 puntos de daño a 1 de tus Pokémon en Banca y 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge anche 30 danni a un Pokémon nella tua panchina e 30 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque também causa 30 pontos de dano a 1 dos seus Pokémon no Banco e 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt auch 1 Pokémon auf deiner Bank und 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "They crawl out of the ocean using their arms. They will attack prey on shore and immediately drag it into the ocean."
	},

	thirdParty: {
		cardmarket: 511715
	}
}

export default card
