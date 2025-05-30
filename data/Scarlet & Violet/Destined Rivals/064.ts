import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Magneton",
		fr: "Magnéton",
		de: "Magneton",
		it: "Magneton",
		es: "Magneton",
		pt: "Magneton"
	},

	illustrator: "Shiburingaru",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Lightning Ball",
			fr: "Boule Éclair",
			de: "Kugelblitz",
			it: "Fulminpalla",
			es: "Bola Relámpago",
			pt: "Bola de Raios"
		},

		damage: 20
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			en: "Explosion",
			fr: "Explosion",
			de: "Explosion",
			it: "Esplosione",
			es: "Explosión",
			pt: "Explosão"
		},

		effect: {
			en: "This Pokémon also does 90 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 90 dégâts.",
			de: "Dieses Pokémon fügt auch sich selbst 90 Schadenspunkte zu.",
			it: "Questo Pokémon infligge anche 90 danni a se stesso.",
			es: "Este Pokémon también se hace 90 puntos de daño a sí mismo.",
			pt: "Este Pokémon também causa 90 pontos de dano a si mesmo."
		},

		damage: 90
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card