import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Machamp",
		'fr-fr': "Mackogneur",
		'es-es': "Machamp",
		'it-it': "Machamp",
		'pt-br': "Machamp",
		'de-de': "Machomei"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Promo",
	category: "Pokemon",
	hp: 170,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Machoke",
		'fr-fr': "Machopeur",
		'de-de': "Maschock",
		'es-es': "Machoke",
		'pt-br': "Machoke",
		'it-it': "Machoke"
	},

	attacks: [{
		name: {
			'en-us': "Macho Revenge",
			'fr-fr': "Revanche Macho",
			'es-es': "Machovenganza",
			'it-it': "Vendetta Bellimbusto",
			'pt-br': "Machocante",
			'de-de': "Macho-Vergeltung"
		},

		effect: {
			'en-us': "This attack does 20 damage for each {F} Pokémon in your discard pile.",
			'fr-fr': "Cette attaque inflige 20 dégâts pour chaque Pokémon {F} dans votre pile de défausse.",
			'es-es': "Este ataque hace 20 puntos de daño por cada Pokémon {F} en tu pila de descartes.",
			'it-it': "Questo attacco infligge 20 danni per ogni Pokémon {F} nella tua pila degli scarti.",
			'pt-br': "Este ataque causa 20 pontos de dano para cada Pokémon {F} na sua pilha de descarte.",
			'de-de': "Diese Attacke fügt für jedes {F}-Pokémon in deinem Ablagestapel 20 Schadenspunkte zu."
		},

		damage: "20×",
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			'en-us': "Dynamite Punch",
			'fr-fr': "Poing Dynamite",
			'es-es': "Puño Dinamita",
			'it-it': "Pugno Dinamite",
			'pt-br': "Soco Dinamite",
			'de-de': "Dynamitstoß"
		},

		effect: {
			'en-us': "This Pokémon also does 50 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 50 dégâts.",
			'es-es': "Este Pokémon también se hace 50 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 50 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 50 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 50 Schadenspunkte zu."
		},

		damage: 200,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,

	description: {
		'en-us': "It quickly swings its four arms to rock its opponents with ceaseless punches and chops from all angles."
	},

	stage: "Stage2",
	dexId: [68],

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 505885
	}
}

export default card
