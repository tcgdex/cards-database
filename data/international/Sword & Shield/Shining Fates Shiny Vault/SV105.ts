import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [812],
	set: Set,

	name: {
		'fr-fr': "Gorythmic V",
		'en-us': "Rillaboom V",
		'es-es': "Rillaboom V",
		'it-it': "Rillaboom V",
		'pt-br': "Rillaboom V",
		'de-de': "Gortrom V"
	},

	illustrator: "5ban Graphics",
	rarity: "Shiny rare V",
	category: "Pokemon",
	hp: 220,
	types: ["Grass"],

	attacks: [{
		name: {
			'fr-fr': "Festin Forestier",
			'en-us': "Forest Feast",
			'es-es': "Festín Forestal",
			'it-it': "Festa del Bosco",
			'pt-br': "Banquete Florestal",
			'de-de': "Waldschmaus"
		},

		effect: {
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 Pokémon Grass de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			'en-us': "Search your deck for up to 2 Basic Grass Pokémon and put them onto your Bench. Then, shuffle your deck.",
			'es-es': "Busca en tu baraja hasta 2 Pokémon Grass Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due Pokémon Base Grass e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 Pokémon Grass Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Grass-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck."
		},

		cost: ["Grass"]
	}, {
		name: {
			'fr-fr': "Martobois",
			'en-us': "Wood Hammer",
			'es-es': "Mazazo",
			'it-it': "Mazzuolegno",
			'pt-br': "Martelo de Madeira",
			'de-de': "Holzhammer"
		},

		effect: {
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'en-us': "This Pokémon also does 30 damage to itself.",
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
	regulationMark: "D",
	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539913,
				tcgplayer: 232494
			}
		},
	],
}

export default card
