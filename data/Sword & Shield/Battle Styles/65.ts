import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Orbeetle",
		fr: "Astronelle",
		es: "Orbeetle",
		it: "Orbeetle",
		pt: "Orbeetle",
		de: "Maritellit"
	},

	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		en: "Dottler",
		fr: "Coléodôme"
	},

	attacks: [{
		name: {
			en: "Evomancy",
			fr: "Évomancie",
			es: "Evomancia",
			it: "Evomanzia",
			pt: "Evomância",
			de: "Evomagie"
		},

		effect: {
			en: "For each Energy attached to this Pokémon, search your deck for a Stage 2 Pokémon, except Orbeetle, and put it onto your Bench. Then, shuffle your deck.",
			fr: "Pour chaque Énergie attachée à ce Pokémon, cherchez dans votre deck un Pokémon de Niveau 2, à l’exception d’Astronelle, puis placez-le sur votre Banc. Mélangez ensuite votre deck.",
			es: "Por cada Energía unida a este Pokémon, busca en tu baraja 1 Pokémon de Fase 2, excepto Orbeetle, y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
			it: "Per ogni Energia assegnata a questo Pokémon, cerca nel tuo mazzo un Pokémon di Fase 2, a eccezione di Orbeetle, e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			pt: "Para cada Energia ligada a este Pokémon, procure por 1 Pokémon Estágio 2 no seu baralho, exceto por Orbeetle, e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche für jede an dieses Pokémon angelegte Energie dein Deck nach 1 Phase-2-Pokémon, außer Maritellit, und lege es auf deine Bank. Mische anschließend dein Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Zen Headbutt",
			fr: "Psykoud’Boul",
			es: "Cabezazo Zen",
			it: "Cozzata Zen",
			pt: "Cabeçada Zen",
			de: "Zen-Kopfstoß"
		},

		damage: 120,
		cost: ["Psychic", "Colorless", "Colorless"]
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
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "It emits psychic energy to observe and study what’s around it—and what’s around it can include things over six miles away."
	}
}

export default card