import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [660],
	set: Set,

	name: {
		en: "Diggersby",
		fr: "Excavarenne",
		es: "Diggersby",
		it: "Diggersby",
		pt: "Diggersby",
		de: "Grebbit"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	evolveFrom: {
		en: "Bunnelby",
		fr: "Sapereau",
		es: "Bunnelby",
		it: "Bunnelby",
		pt: "Bunnelby",
		de: "Scoppel"
	},

	stage: "Stage1",
	retreat: 4,
	regulationMark: "E",
	illustrator: "MAHOU",

	description: {
		en: "The fur on its belly retains heat exceptionally well. People used to make heavy winter clothing from fur shed by this Pokémon."
	},

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Hammer In",
			fr: "Enfoncement",
			de: "Einhämmern",
			es: "Martillear",
			pt: "Martelada",
			it: "Martello"
		},

		damage: 80
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Take Down",
			fr: "Bélier",
			de: "Bodycheck",
			es: "Derribo",
			pt: "Desmantelar",
			it: "Riduttore"
		},

		damage: 150,

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582951
	}
}

export default card