import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Duraludon",
		fr: "Duralugon",
		es: "Duraludon",
		pt: "Duraludon",
		it: "Duraludon",
		de: "Duraludon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Hammer In",
			fr: "Enfoncement",
			es: "Martillear",
			pt: "Martelada",
			it: "Martello",
			de: "Einhämmern"
		},

		damage: 30
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Raging Hammer",
			fr: "Marteau Rageur",
			es: "Martillo Furioso",
			pt: "Martelo Feroz",
			it: "Martelfuria",
			de: "Wuthammer"
		},

		effect: {
			en: "This attack does 10 more damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts sur ce Pokémon.",
			es: "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon.",
			pt: "Este ataque causa 10 pontos de dano a mais para cada contador de dano neste Pokémon.",
			it: "Questo attacco infligge 10 danni in più per ogni segnalino danno presente su questo Pokémon.",
			de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card