import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [812],

	name: {
		'en-us': "Rillaboom V",
		'fr-fr': "Gorythmic V",
		'es-es': "Rillaboom V",
		'it-it': "Rillaboom V",
		'pt-br': "Rillaboom V",
		'de-de': "Gortrom V"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare V",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Forest Feast",
				'fr-fr': "Festin Forestier",
				'es-es': "Festín Forestal",
				'it-it': "Festa del Bosco",
				'pt-br': "Banquete Florestal",
				'de-de': "Waldschmaus"
			},
			effect: {
				'en-us': "Search your deck for up to 2 Basic Grass Pokémon and put them onto your Bench. Then, shuffle your deck.",
				'fr-fr': "Cherchez dans votre deck jusqu'à 2 Pokémon Grass de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 2 Pokémon Grass Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo fino a due Pokémon Base Grass e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por até 2 Pokémon Grass Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Grass-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Colorless",
			],
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

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,
	hp: 220,
	types: ["Grass"],
	regulationMark: "D",


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 457478,
				tcgplayer: 213087
			}
		},
	],
}

export default card
