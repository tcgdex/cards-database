import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [82],
	set: Set,

	name: {
		en: "Magneton",
		fr: "Magnéton",
		es: "Magneton",
		it: "Magneton",
		pt: "Magneton",
		de: "Magneton"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	evolveFrom: {
		en: "Magnemite",
		fr: "Magnéti",
		es: "Magnemite",
		it: "Magnemite",
		pt: "Magnemite",
		de: "Magnetilo"
	},


	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Lightning Ball",
			fr: "Boule Éclair",
			es: "Bola Relámpago",
			it: "Fulminpalla",
			pt: "Bola de Raios",
			de: "Kugelblitz"
		},

		damage: 20
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			en: "Explosion",
			fr: "Explosion",
			es: "Explosión",
			it: "Esplosione",
			pt: "Explosão",
			de: "Explosion"
		},

		effect: {
			en: "This Pokémon also does 90 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 90 dégâts.",
			es: "Este Pokémon también se hace 90 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 90 danni a se stesso.",
			pt: "Este Pokémon também causa 90 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 90 Schadenspunkte zu."
		},

		damage: 90
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Shiburingaru",

	thirdParty: {
		cardmarket: 702360
	}
}

export default card