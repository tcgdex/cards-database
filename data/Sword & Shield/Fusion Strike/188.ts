import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Meltan",
		fr: "Meltan",
		es: "Meltan",
		it: "Meltan",
		pt: "Meltan",
		de: "Meltan"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Teeziro",

	description: {
		en: "It melts particles of iron and other metals found in the subsoil, so it can absorb them into its body of molten steel."
	},

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Iron Intake"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Headbutt"
		},

		damage: 20
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card