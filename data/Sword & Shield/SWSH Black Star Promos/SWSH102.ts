import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Venusaur VMAX",
		fr: "Florizarre VMAX",
		es: "Venusaur VMAX",
		it: "Venusaur VMAX",
		pt: "Venusaur VMAX",
		de: "Bisaflor VMAX"
	},

	illustrator: "aky CG Works",
	rarity: "None",
	category: "Pokemon",
	hp: 330,
	types: ["Grass"],

	evolveFrom: {
		en: "Venusaur V"
	},

	attacks: [{
		name: {
			en: "Forest Storm",
			fr: "Tempête Sylvestre",
			es: "Tormenta Forestal",
			it: "Tempesta Forestale",
			pt: "Forest Storm",
			de: "Waldsturm"
		},

		effect: {
			en: "This attack does 30 damage for each Grass Energy attached to all of your Pokémon.",
			fr: "Cette attaque inflige 30 dégâts pour chaque Énergie Grass attachée à tous vos Pokémon.",
			es: "Este ataque hace 30 puntos de daño por cada Energía Grass unida a todos tus Pokémon.",
			it: "Questo attacco infligge 30 danni per ogni Energia Grass assegnata ai tuoi Pokémon.",
			pt: "This attack does 30 damage for each Grass Energy attached to all of your Pokémon.",
			de: "Diese Attacke fügt für jede an alle deine Pokémon angelegte Grass-Energie 30 Schadenspunkte zu."
		},

		damage: "30×",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "G-Max Bloom",
			fr: "Floraison G-Max",
			es: "Gigafloración",
			it: "Gigasbocciata",
			pt: "G-Max Bloom",
			de: "Giga-Blüte"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			pt: "Heal 30 damage from this Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon."
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

	regulationMark: "E"
}

export default card