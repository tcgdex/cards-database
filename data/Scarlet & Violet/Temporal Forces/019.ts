import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [781],
	set: Set,

	name: {
		en: "Dhelmise",
		fr: "Sinistrail",
		es: "Dhelmise",
		it: "Dhelmise",
		pt: "Dhelmise",
		de: "Moruda"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Spinning Attack",
			fr: "Attaque Tournante",
			es: "Ataque Giratorio",
			it: "Attacco Rotante",
			pt: "Ataque Giratório",
			de: "Rundumangriff"
		},

		damage: 30
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Steel Anchor",
			fr: "Ancre d'Acier",
			es: "Ancla de Acero",
			it: "Ancora d'Acciaio",
			pt: "Âncora de Aço",
			de: "Stahlanker"
		},

		effect: {
			en: "If you have any Metal Pokémon on your Bench, this attack does 80 more damage.",
			fr: "Si vous avez au moins un Pokémon Metal sur votre Banc, cette attaque inflige 80 dégâts supplémentaires.",
			es: "Si tienes algún Pokémon Metal en tu Banca, este ataque hace 80 puntos de daño más.",
			it: "Se hai dei Pokémon Metal in panchina, questo attacco infligge 80 danni in più.",
			pt: "Se você tiver algum Pokémon Metal no seu Banco, este ataque causará 80 pontos de dano a mais.",
			de: "Wenn du mindestens 1 Metal-Pokémon auf deiner Bank hast, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		holo: false
	}
}

export default card