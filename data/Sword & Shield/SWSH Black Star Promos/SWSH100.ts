import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "aky CG Works",
	category: "Pokemon",
	stage: "Basic",

	name: {
		en: "Venusaur V",
		fr: "Florizarre V",
		de: "Bisaflor V",
		es: "Venusaur V",
		pt: "Venusaur V",
		it: "Venusaur V"
	},

	rarity: "None",
	dexId: [3],
	hp: 220,
	types: ["Grass"],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Leaf Drain",
			fr: "Feuille Sangsue",
			de: "Blattsauger",
			es: "Hoja Drenante",
			pt: "Dreno Folha",
			it: "Assorbifoglia"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			pt: "Cure 30 pontos de dano deste Pokémon.",
			it: "Cura questo Pokémon da 30 danni."
		},

		damage: 50
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Double-Edge",
			fr: "Damoclès",
			de: "Risikotackle",
			es: "Doble Filo",
			pt: "Faca de Dois Gumes",
			it: "Sdoppiatore"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso."
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
