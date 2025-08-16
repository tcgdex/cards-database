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
		en: "Venusaur V",
		fr: "Florizarre-V",
		de: "Bisaflor-V",
		es: "Venusaur V",
		pt: "Venusaur V",
		it: "Venusaur-V"
	},

	attacks: [{
		name: {
			en: "Forest Storm",
			fr: "Tempête Sylvestre",
			es: "Tormenta Forestal",
			it: "Tempesta Forestale",
			pt: "Tempestade Florestal",
			de: "Waldsturm"
		},

		effect: {
			en: "This attack does 30 damage for each {G} Energy attached to all of your Pokémon.",
			fr: "Cette attaque inflige 30 dégâts pour chaque Énergie {G} attachée à tous vos Pokémon.",
			es: "Este ataque hace 30 puntos de daño por cada Energía {G} unida a todos tus Pokémon.",
			it: "Questo attacco infligge 30 danni per ogni Energia {G} assegnata ai tuoi Pokémon.",
			pt: "Este ataque causa 30 pontos de dano para cada Energia {G} ligada a todos os seus Pokémon.",
			de: "Diese Attacke fügt für jede an alle deine Pokémon angelegte {G}-Energie 30 Schadenspunkte zu."
		},

		damage: "30×",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "G-Max Bloom",
			fr: "Floraison G-Max",
			es: "Gigafloración",
			it: "Gigasbocciata",
			pt: "Florescer G-Max",
			de: "Giga-Blüte"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano deste Pokémon.",
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

	regulationMark: "E",

	thirdParty: {
		cardmarket: 546981
	}
}

export default card