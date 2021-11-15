import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Smeargle",
		fr: "Queulorior",
		es: "Smeargle",
		it: "Smeargle",
		pt: "Smeargle",
		de: "Farbeagle"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Mitsuhiro Arita",

	description: {
		en: "It draws symbols with the fluid that oozes from the tip of its tail. Depending on the symbol, Smeargle fanatics will pay big money for them."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Sketching Trash"
		},

		effect: {
			en: "Put up to 2 Fusion Strike Trainer cards from your discard pile into your hand."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Tail Whap"
		},

		damage: 80
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card