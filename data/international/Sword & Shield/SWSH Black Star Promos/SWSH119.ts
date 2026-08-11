import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "Yuya Oka",
	category: "Pokemon",

	description: {
		'en-us': "This Pokémon's stomach is so strong, even eating moldy or rotten food will not affect it."
	},

	stage: "Basic",

	name: {
		'en-us': "Snorlax",
		'fr-fr': "Ronflex",
		'de-de': "Relaxo",
		'es-es': "Snorlax",
		'pt-br': "Snorlax",
		'it-it': "Snorlax"
	},

	rarity: "Promo",
	dexId: [143],
	hp: 140,
	types: ["Colorless"],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Slap Push",
			'fr-fr': "Grande Claque",
			'de-de': "Stoß",
			'es-es': "Empujón con Bofetón",
			'pt-br': "Tapa Empurrão",
			'it-it': "Spintonata"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Single Strike Tackle",
			'fr-fr': "Charge Poing Final",
			'de-de': "Fokussierter-Angriff-Tackle",
			'es-es': "Placaje Golpe Brusco",
			'pt-br': "Investida Golpe Decisivo",
			'it-it': "Azione Colpo Singolo"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso."
		},

		damage: 120
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "E",

	thirdParty: {
		cardmarket: 461684
	}
}

export default card
