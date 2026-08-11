import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [826],
	set: Set,

	name: {
		'en-us': "Orbeetle",
		'fr-fr': "Astronelle",
		'es-es': "Orbeetle",
		'it-it': "Orbeetle",
		'pt-br': "Orbeetle",
		'de-de': "Maritellit"
	},

	illustrator: "Mizue",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Dottler",
		'fr-fr': "Coléodôme",
		'es-es': "Dottler",
		'it-it': "Dottler",
		'pt-br': "Dottler",
		'de-de': "Keradar"
	},

	attacks: [{
		name: {
			'en-us': "Evomancy",
			'fr-fr': "Évomancie",
			'es-es': "Evomancia",
			'it-it': "Evomanzia",
			'pt-br': "Evomância",
			'de-de': "Evomagie"
		},

		effect: {
			'en-us': "For each Energy attached to this Pokémon, search your deck for a Stage 2 Pokémon, except Orbeetle, and put it onto your Bench. Then, shuffle your deck.",
			'fr-fr': "Pour chaque Énergie attachée à ce Pokémon, cherchez dans votre deck un Pokémon de Niveau 2, à l'exception d'Astronelle, puis placez-le sur votre Banc. Mélangez ensuite votre deck.",
			'es-es': "Por cada Energía unida a este Pokémon, busca en tu baraja 1 Pokémon de Fase 2, excepto Orbeetle, y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
			'it-it': "Per ogni Energia assegnata a questo Pokémon, cerca nel tuo mazzo un Pokémon di Fase 2, a eccezione di Orbeetle, e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Para cada Energia ligada a este Pokémon, procure por 1 Pokémon Estágio 2 no seu baralho, exceto por Orbeetle, e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche für jede an dieses Pokémon angelegte Energie dein Deck nach 1 Phase-2-Pokémon, außer Maritellit, und lege es auf deine Bank. Mische anschließend dein Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Zen Headbutt",
			'fr-fr': "Psykoud'Boul",
			'es-es': "Cabezazo Zen",
			'it-it': "Cozzata Zen",
			'pt-br': "Cabeçada Zen",
			'de-de': "Zen-Kopfstoß"
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


	stage: "Stage2",

	description: {
		'en-us': "It emits psychic energy to observe and study what's around it—and what's around it can include things over six miles away."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 545441,
				tcgplayer: 234241
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545441,
				tcgplayer: 234241
			}
		},
	],
}

export default card
