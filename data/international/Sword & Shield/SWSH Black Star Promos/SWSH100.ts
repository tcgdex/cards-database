import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "aky CG Works",
	category: "Pokemon",
	stage: "Basic",

	name: {
		'en-us': "Venusaur V",
		'fr-fr': "Florizarre V",
		'de-de': "Bisaflor V",
		'es-es': "Venusaur V",
		'pt-br': "Venusaur V",
		'it-it': "Venusaur V"
	},

	rarity: "Promo",
	dexId: [3],
	hp: 220,
	types: ["Grass"],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Leaf Drain",
			'fr-fr': "Feuille Sangsue",
			'de-de': "Blattsauger",
			'es-es': "Hoja Drenante",
			'pt-br': "Dreno Folha",
			'it-it': "Assorbifoglia"
		},

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni."
		},

		damage: 50
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'en-us': "Double-Edge",
			'fr-fr': "Damoclès",
			'de-de': "Risikotackle",
			'es-es': "Doble Filo",
			'pt-br': "Faca de Dois Gumes",
			'it-it': "Sdoppiatore"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso."
		},

		damage: 190
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "E",
	suffix: "V",

	thirdParty: {
		cardmarket: 538768
	}
}

export default card
