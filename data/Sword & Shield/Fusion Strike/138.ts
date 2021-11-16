import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Onix",
		fr: "Onix",
		es: "Onix",
		it: "Onix",
		pt: "Onix",
		de: "Onix"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	stage: "Basic",
	retreat: 4,
	regulationMark: "E",
	illustrator: "KEIICHIRO ITO",

	description: {
		en: "It rapidly bores through the ground at 50 mph by squirming and twisting its massive, rugged body."
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Guard Press"
		},

		damage: 30,

		effect: {
			en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance)."
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Rock Throw"
		},

		damage: 90
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card