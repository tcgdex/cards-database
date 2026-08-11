import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Venusaur VMAX",
		'fr-fr': "Florizarre VMAX",
		'es-es': "Venusaur VMAX",
		'it-it': "Venusaur VMAX",
		'pt-br': "Venusaur VMAX",
		'de-de': "Bisaflor VMAX"
	},

	illustrator: "aky CG Works",
	rarity: "Promo",
	category: "Pokemon",
	hp: 330,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Venusaur V",
		'fr-fr': "Florizarre-V",
		'de-de': "Bisaflor-V",
		'es-es': "Venusaur V",
		'pt-br': "Venusaur V",
		'it-it': "Venusaur-V"
	},

	attacks: [{
		name: {
			'en-us': "Forest Storm",
			'fr-fr': "Tempête Sylvestre",
			'es-es': "Tormenta Forestal",
			'it-it': "Tempesta Forestale",
			'pt-br': "Tempestade Florestal",
			'de-de': "Waldsturm"
		},

		effect: {
			'en-us': "This attack does 30 damage for each {G} Energy attached to all of your Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts pour chaque Énergie {G} attachée à tous vos Pokémon.",
			'es-es': "Este ataque hace 30 puntos de daño por cada Energía {G} unida a todos tus Pokémon.",
			'it-it': "Questo attacco infligge 30 danni per ogni Energia {G} assegnata ai tuoi Pokémon.",
			'pt-br': "Este ataque causa 30 pontos de dano para cada Energia {G} ligada a todos os seus Pokémon.",
			'de-de': "Diese Attacke fügt für jede an alle deine Pokémon angelegte {G}-Energie 30 Schadenspunkte zu."
		},

		damage: "30×",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "G-Max Bloom",
			'fr-fr': "Floraison G-Max",
			'es-es': "Gigafloración",
			'it-it': "Gigasbocciata",
			'pt-br': "Florescer G-Max",
			'de-de': "Giga-Blüte"
		},

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 210,
		cost: ["Grass", "Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 4,
	stage: "VMAX",
	dexId: [3],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "E",

	thirdParty: {
		cardmarket: 546981
	}
}

export default card
