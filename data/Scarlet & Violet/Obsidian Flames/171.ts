import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [507],
	set: Set,

	name: {
		fr: "Ponchien",
		en: "Herdier",
		es: "Herdier",
		it: "Herdier",
		pt: "Herdier",
		de: "Terribark"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Ruade",
			en: "Rear Kick",
			es: "Patada Trasera",
			it: "Retrocalcio",
			pt: "Chute Traseiro",
			de: "Rückwärtskick"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Enfoncement",
			en: "Hammer In",
			es: "Martillear",
			it: "Martello",
			pt: "Martelada",
			de: "Einhämmern"
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card