import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Mothim",
		fr: "Papilord",
		es: "Mothim",
		it: "Mothim",
		pt: "Mothim",
		de: "Moterpel"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	evolveFrom: {
		en: "Burmy",
		fr: "Cheniti",
		es: "Burmy",
		it: "Burmy",
		pt: "Burmy",
		de: "Burmy"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Raid",
			fr: "Razzia Obscure",
			es: "Raid Oscuro",
			it: "Raid",
			pt: "Reide",
			de: "Überfall"
		},

		effect: {
			en: "If this Pokémon evolved from Burmy during this turn, this attack does 90 more damage.",
			fr: "Si ce Pokémon a évolué de Cheniti pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Si este Pokémon ha evolucionado de Burmy durante este turno, este ataque hace 90 puntos de daño más.",
			it: "Se questo Pokémon si è evoluto da Burmy durante questo turno, questo attacco infligge 90 danni in più.",
			pt: "Se este Pokémon evoluiu de Burmy durante este turno, este ataque causará 90 pontos de dano a mais.",
			de: "Wenn sich dieses Pokémon während dieses Zuges aus Burmy entwickelt hat, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Gust",
			fr: "Tornade",
			es: "Tornado",
			it: "Raffica",
			pt: "Lufada de Vento",
			de: "Windstoß"
		},

		damage: 80
	}],

	retreat: 0,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card