import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Zekrom",
		fr: "Zekrom",
		es: "Zekrom",
		it: "Zekrom",
		pt: "Zekrom",
		de: "Zekrom"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],
	stage: "Basic",
	illustrator: "Aya Kusube",

	attacks: [{
		name: {
			en: "Field Crush",
			fr: "Broyeur de Terrain",
			es: "Arrasamiento de Campo",
			it: "Invasione di Campo",
			pt: "Esmagamento de Campo",
			de: "Feldschlag"
		},

		effect: {
			en: "If your opponent has a Stadium in play, discard it.",
			fr: "Si votre adversaire a un Stade en jeu, défaussez-le.",
			es: "Si tu rival tiene un Estadio en juego, descártalo.",
			it: "Se il tuo avversario ha una carta Stadio in gioco, scartala.",
			pt: "Se o seu oponente tiver um Estádio em jogo, descarte-o.",
			de: "Wenn dein Gegner eine Stadionkarte im Spiel hat, lege sie auf seinen Ablagestapel."
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "White Thunder",
			fr: "Tonnerre Blanc",
			es: "Trueno Blanco",
			it: "Tuono Bianco",
			pt: "Trovão Branco",
			de: "Weißer Donner"
		},

		effect: {
			en: "If Reshiram is on your Bench, this attack does 80 more damage.",
			fr: "Si Reshiram est sur votre Banc, cette attaque inflige 80 dégâts supplémentaires.",
			es: "Si Reshiram está en tu Banca, este ataque hace 80 puntos de daño más.",
			it: "Se Reshiram è nella tua panchina, questo attacco infligge 80 danni in più.",
			pt: "Se Reshiram estiver no seu Banco, este ataque causará 80 pontos de dano a mais.",
			de: "Wenn sich Reshiram auf deiner Bank befindet, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+",
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",

	description: {
		en: "Concealing itself in lightning clouds, it flies throughout the Unova region. It creates electricity in its tail."
	},

	dexId: [644],

	thirdParty: {
		cardmarket: 576755
	}
}

export default card