import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [112],
	set: Set,

	name: {
		en: "Rhydon",
		fr: "Rhinoféros",
		es: "Rhydon",
		it: "Rhydon",
		pt: "Rhydon",
		de: "Rizeros"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	evolveFrom: {
		en: "Rhyhorn",
		fr: "Rhinocorne",
		es: "Rhyhorn",
		it: "Rhyhorn",
		pt: "Rhyhorn",
		de: "Rihorn"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Horn Drill",
			fr: "Empal'Korne",
			es: "Perforador",
			it: "Perforcorno",
			pt: "Chifre Broca",
			de: "Hornbohrer"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Take Down",
			fr: "Bélier",
			es: "Derribo",
			it: "Riduttore",
			pt: "Desmantelar",
			de: "Bodycheck"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 120
	}],

	retreat: 3,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	},

	thirdParty: {
		cardmarket: 674103
	}
}

export default card