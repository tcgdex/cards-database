import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Rillaboom V",
		'fr-fr': "Gorythmic V",
		'es-es': "Rillaboom V",
		'it-it': "Rillaboom V",
		'pt-br': "Rillaboom V",
		'de-de': "Gortrom V"
	},

	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	hp: 220,
	types: ["Grass"],

	attacks: [{
		name: {
			'en-us': "Forest Feast",
			'fr-fr': "Festin Forestier",
			'es-es': "Festín Forestal",
			'it-it': "Festa del Bosco",
			'pt-br': "Banquete Florestal",
			'de-de': "Waldschmaus"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Basic {G} Pokémon and put them onto your Bench. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 Pokémon {G} de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 Pokémon {G} Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due Pokémon Base {G} e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 Pokémon {G} Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-{G}-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck."
		},

		cost: ["Grass"]
	}, {
		name: {
			'en-us': "Wood Hammer",
			'fr-fr': "Martobois",
			'es-es': "Mazazo",
			'it-it': "Mazzuolegno",
			'pt-br': "Martelo de Madeira",
			'de-de': "Holzhammer"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 220,
		cost: ["Grass", "Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	stage: "Basic",
	dexId: [812],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",
	suffix: "V",

	thirdParty: {
		cardmarket: 450673
	}
}

export default card
