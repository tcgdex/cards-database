import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Duraludon",
		'fr-fr': "Duralugon",
		'es-es': "Duraludon",
		'pt-br': "Duraludon",
		'de-de': "Duraludon",
		'it-it': "Duraludon"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Promo",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	attacks: [{
		name: {
			'en-us': "Metal Claw",
			'fr-fr': "Griffe Acier",
			'es-es': "Garra Metal",
			'pt-br': "Garra de Metal",
			'de-de': "Metallklaue",
			'it-it': "Ferrartigli"
		},

		damage: 70,
		cost: ["Metal", "Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Steel Beam",
			'fr-fr': "Métalaser",
			'es-es': "Metaláser",
			'pt-br': "Feixe de Aço",
			'de-de': "Stahlstrahl",
			'it-it': "Raggio d'Acciaio"
		},

		effect: {
			'en-us': "This Pokémon also does 40 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 40 dégâts.",
			'es-es': "Este Pokémon también se hace 40 puntos de daño a sí mismo.",
			'pt-br': "Este Pokémon também causa 40 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 40 Schadenspunkte zu.",
			'it-it': "Questo Pokémon infligge anche 40 danni a se stesso."
		},

		damage: 150,
		cost: ["Metal", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,

	description: {
		'en-us': "Its body resembles polished metal, and it's both lightweight and strong. The only drawback is that it rusts easily."
	},

	stage: "Basic",
	dexId: [884],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 453308
	}
}

export default card
