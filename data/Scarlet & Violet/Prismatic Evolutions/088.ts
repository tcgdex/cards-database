import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Furfrou",
		fr: "Couafarel",
		es: "Furfrou",
		pt: "Furfrou",
		it: "Furfrou",
		de: "Coiffwaff"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Fur Coat",
			fr: "Toison Épaisse",
			es: "Pelaje Recio",
			pt: "Camada de Pelos",
			it: "Foltopelo",
			de: "Fellkleid"
		},

		effect: {
			en: "This Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			es: "Los ataques hacen 20 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			pt: "Este Pokémon recebe 20 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			it: "Questo Pokémon subisce 20 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			de: "Diesem Pokémon werden durch Attacken 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			pt: "Mordida",
			it: "Morso",
			de: "Biss"
		},

		damage: 80
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card