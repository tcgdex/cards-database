import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Primeape",
		fr: "Colossinge",
		es: "Primeape",
		it: "Primeape",
		pt: "Primeape",
		de: "Rasaff"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	evolveFrom: {
		en: "Mankey",
		fr: "Férosinge",
		es: "Mankey",
		it: "Mankey",
		pt: "Mankey",
		de: "Menki"
	},

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

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Steamin' Mad Strike",
			fr: "Poing Furibond",
			es: "Golpe Enfurecimiento",
			it: "Colpo Escandescenza",
			pt: "Golpe Cabeça Quente",
			de: "Kochender Wutangriff"
		},

		effect: {
			en: "This attack does 50 damage for each of your Benched Pokémon that has any damage counters on it.",
			fr: "Cette attaque inflige 50 dégâts pour chacun de vos Pokémon de Banc ayant au moins un marqueur de dégâts.",
			es: "Este ataque hace 50 puntos de daño por cada uno de tus Pokémon en Banca que tenga algún contador de daño sobre él.",
			it: "Questo attacco infligge 50 danni per ogni Pokémon nella tua panchina che ha dei segnalini danno.",
			pt: "Este ataque causa 50 pontos de dano para cada um dos seus Pokémon no Banco que tiver algum contador de dano nele.",
			de: "Diese Attacke fügt für jedes Pokémon auf deiner Bank, auf dem mindestens 1 Schadensmarke liegt, 50 Schadenspunkte zu."
		},

		damage: "50×",
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "The blood vessels in its brain are sturdier than those of other Pokémon, so it can stay healthy despite its constant raging."
	}
}

export default card
