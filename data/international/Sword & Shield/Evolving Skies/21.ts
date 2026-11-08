import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Volcarona V",
		'fr-fr': "Pyrax V",
		'es-es': "Volcarona V",
		'it-it': "Volcarona V",
		'pt-br': "Volcarona V",
		'de-de': "Ramoth V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],
	stage: "Basic",
	illustrator: "kawayoo",

	attacks: [{
		name: {
			'en-us': "Surging Flames",
			'fr-fr': "Flammes Jaillissantes",
			'es-es': "Llamas Crecientes",
			'it-it': "Fuocoraffica",
			'pt-br': "Surging Flames",
			'de-de': "Flammenschwall"
		},

		effect: {
			'en-us': "This attack does 20 more damage for each basic Energy card in your discard pile. Then, shuffle those Energy cards into your deck.",
			'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque carte Énergie de base dans votre pile de défausse. Mélangez ensuite ces cartes Énergie avec votre deck.",
			'es-es': "Este ataque hace 20 puntos de daño más por cada carta de Energía Básica en tu pila de descartes. Después, pon esas cartas de Energía en tu baraja y barájalas todas.",
			'it-it': "Questo attacco infligge 20 danni in più per ogni carta Energia base nella tua pila degli scarti. Poi rimischia quelle carte Energia nel tuo mazzo.",
			'pt-br': "This attack does 20 more damage for each basic Energy card in your discard pile. Then, shuffle those Energy cards into your deck.",
			'de-de': "Diese Attacke fügt für jede Basis-Energiekarte in deinem Ablagestapel 20 Schadenspunkte mehr zu. Mische jene Energiekarten anschließend in dein Deck."
		},

		damage: "20+",
		cost: ["Fire"]
	}, {
		name: {
			'en-us': "Fire Blast",
			'fr-fr': "Déflagration",
			'es-es': "Llamarada",
			'it-it': "Fuocobomba",
			'pt-br': "Fire Blast",
			'de-de': "Feuersturm"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'pt-br': "Discard an Energy from this Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 160,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	dexId: [637],
	regulationMark: "E",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574045,
				tcgplayer: 246715
			}
		},
	],
}

export default card
