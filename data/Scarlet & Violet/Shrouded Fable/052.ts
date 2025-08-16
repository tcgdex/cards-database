import { Card } from "../../../interfaces"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [759],
	set: Set,

	name: {
		en: "Stufful",
		fr: "Nounourson",
		es: "Stufful",
		it: "Stufful",
		pt: "Stufful",
		de: "Velursi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Take Down",
			fr: "Bélier",
			es: "Derribo",
			it: "Riduttore",
			pt: "Desmantelar",
			de: "Bodycheck"
		},

		effect: {
			en: "This Pokémon also does 10 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 10 dégâts.",
			es: "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 10 danni a se stesso.",
			pt: "Este Pokémon também causa 10 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu."
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "ryoma uratsuka",

	thirdParty: {
		cardmarket: 780948
	}
}

export default card
