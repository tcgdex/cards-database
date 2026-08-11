import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
		'es-es': "Pikachu",
		'it-it': "Pikachu",
		'pt-br': "Pikachu",
		'de-de': "Pikachu"
	},

	illustrator: "Aya Kusube",
	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	attacks: [{
		name: {
			'en-us': "Thunder Jolt",
			'fr-fr': "Secousse Tonnerre",
			'es-es': "Sacudida Atronadora",
			'it-it': "Scoppiotuono",
			'pt-br': "Choque do Trovão",
			'de-de': "Donnerrüttler"
		},

		damage: 40,

		effect: {
			'en-us': "This Pokémon does 20 damage to itself.",
			'fr-fr': "Ce Pokémon s’inflige 20 dégâts.",
			'es-es': "Este Pokémon se hace 20 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge 20 danni a se stesso.",
			'pt-br': "Este Pokémon causa 20 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt sich selbst 20 Schadenspunkte zu."
		},

		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	resistances: [{
		type: "Metal",
		value: "-20"
	}],

	retreat: 1,

	description: {
		'en-us': "It's in its nature to store electricity. It feels stressed now and then if it's unable to fully discharge the electricity.",
	},
}

export default card
