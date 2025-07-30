import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Tutafeh de Galar",
		en: "Galarian Yamask",
		es: "Yamask de Galar",
		it: "Yamask di Galar",
		pt: "Yamask de Galar",
		de: "Galar-Makabaja"
	},

	illustrator: "sowsow",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	attacks: [{
		name: {
			fr: "Attaque Imprudente",
			en: "Reckless Charge",
			es: "Carga Descuidada",
			it: "Carica Avventata",
			pt: "Carga Indomável",
			de: "Waghalsiger Sturmangriff"
		},

		effect: {
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			en: "This Pokémon also does 30 damage to itself.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",
	stage: "Basic",

	description: {
		en: "A clay slab with cursed engravings took possession of a Yamask. The slab is said to be absorbing the Yamask's dark power."
	},

	thirdParty: {
		cardmarket: 539713
	}
}

export default card
