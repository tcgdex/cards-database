import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Dispareptil",
		en: "Drakloak",
		es: "Drakloak",
		it: "Drakloak",
		pt: "Drakloak",
		de: "Phandra"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		fr: "Fantyrm",
		en: "Dreepy"
	},

	attacks: [{
		name: {
			fr: "Citation",
			en: "Summon",
			es: "Llamamiento",
			it: "Invocazione",
			pt: "Convidar",
			de: "Herbeirufen"
		},

		effect: {
			fr: "Cherchez un Fantyrm dans votre deck, puis placez-le sur votre Banc. Mélangez ensuite votre deck.",
			en: "Search your deck for a Dreepy and put it onto your Bench. Then, shuffle your deck.",
			es: "Busca en tu baraja 1 Dreepy y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo un Dreepy e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por 1 Dreepy no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach 1 Grolldra und lege es auf deine Bank. Mische anschließend dein Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Morsure",
			en: "Bite",
			es: "Mordisco",
			it: "Morso",
			pt: "Mordida",
			de: "Biss"
		},

		damage: 40,
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Stage1",

	description: {
		en: "It's capable of flying faster than 120 mph. It battles alongside Dreepy and dotes on them until they successfully evolve."
	},

	thirdParty: {
		cardmarket: 539693
	}
}

export default card
