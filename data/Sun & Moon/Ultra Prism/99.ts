import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Garchomp",
		fr: "Carchacrok",
		es: "Garchomp",
		it: "Garchomp",
		pt: "Garchomp",
		de: "Knakrack"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		445,
	],

	hp: 150,

	types: [
		"Dragon",
	],

	evolveFrom: {
		en: "Gabite",
		fr: "Carmache",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quick Dive",
				fr: "Plongeon Rapide",
				es: "Picado Raudo",
				it: "Immersione Veloce",
				pt: "Mergulho Acelerado",
				de: "Schnelltaucher"
			},
			effect: {
				en: "This attack does 50 damage to 1 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 50 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 50 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 50 danni a uno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 50 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Royal Blades",
				fr: "Lames Royales",
				es: "Cuchillas Reales",
				it: "Lame Reali",
				pt: "Lâminas Reais",
				de: "Königsklingen"
			},
			effect: {
				en: "If you played Cynthia from your hand during this turn, this attack does 100 more damage.",
				fr: "Si vous avez joué Cynthia de votre main pendant ce tour, cette attaque inflige 100 dégâts supplémentaires.",
				es: "Si has jugado 1 carta de Cintia de tu mano durante este turno, este ataque hace 100 puntos de daño más.",
				it: "Se hai giocato Camilla dalla tua mano durante questo turno, questo attacco infligge 100 danni in più.",
				pt: "Se você jogou a Cíntia da sua mão durante esta vez de jogar, este ataque causará 100 pontos de dano a mais.",
				de: "Wenn du Cynthia während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 100 Schadenspunkte mehr zu."
			},
			damage: "100+",

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 0
}

export default card
