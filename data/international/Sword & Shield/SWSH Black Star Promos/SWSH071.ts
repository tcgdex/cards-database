import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Scorbunny",
		'fr-fr': "Flambino",
		'es-es': "Scorbunny",
		'pt-br': "Scorbunny",
		'de-de': "Hopplo",
		'it-it': "Scorbunny"
	},

	illustrator: "Akira Komayama",
	rarity: "Promo",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	attacks: [{
		name: {
			'en-us': "Me First",
			'fr-fr': "Moi d'Abord",
			'es-es': "Yo Primero",
			'pt-br': "Primeiro Eu",
			'de-de': "Egotrip",
			'it-it': "Precedenza"
		},

		effect: {
			'en-us': "Draw a card.",
			'fr-fr': "Piochez une carte.",
			'es-es': "Roba 1 carta.",
			'pt-br': "Compre 1 carta.",
			'de-de': "Ziehe 1 Karte.",
			'it-it': "Pesca una carta."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Live Coal",
			'fr-fr': "Charbon Mutant",
			'es-es': "Carbón Activado",
			'pt-br': "Carvão Vivo",
			'de-de': "Glühende Kohlen",
			'it-it': "Carboni Ardenti"
		},

		damage: 20,
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,

	description: {
		'en-us': "A warm-up of running around gets fire energy coursing through this Pokémon's body. Once that happens, it's ready to fight at full power."
	},

	stage: "Basic",
	dexId: [813],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 427086
	}
}

export default card
