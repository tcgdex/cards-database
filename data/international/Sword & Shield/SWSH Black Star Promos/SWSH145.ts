import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	dexId: [25],
	set: Set,
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		'en-us': "Pikachu V",
		'fr-fr': "Pikachu V",
		'de-de': "Pikachu V",
		'es-es': "Pikachu V",
		'pt-br': "Pikachu V",
		'it-it': "Pikachu V"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'fr-fr': "Électacle",
			'de-de': "Volttackle",
			'es-es': "Placaje Eléctrico",
			'pt-br': "Investida Trovão",
			'it-it': "Locomovolt",
			'en-us': "Volt Tackle"
		},

		effect: {
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'en-us': "This Pokémon also does 30 damage to itself."
		},

		damage: 210
	}],

	retreat: 1,
	regulationMark: "E",

	thirdParty: {
		cardmarket: 461594
	}
}

export default card
