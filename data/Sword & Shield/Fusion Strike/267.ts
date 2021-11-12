import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Boltund VMAX",
		fr: "Fulgudog VMAX",
		es: "Boltund VMAX",
		it: "Boltund VMAX",
		pt: "Boltund VMAX",
		de: "Bellektro VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Lightning"],

	evolveFrom: {
		en: "Boltund V",
		fr: "Fulgudog-V",
		es: "Boltund V",
		it: "Boltund-V",
		pt: "Boltund V",
		de: "Bellektro-V"
	},

	stage: "VMAX",
	retreat: 2,
	regulationMark: "E",
	illustrator: "PLANETA Tsuji",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Bolt Storm"
		},

		damage: "30+",

		effect: {
			en: "This attack does 30 more damage for each Lightning Energy attached to all of your Pokémon."
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Max Bolt"
		},

		damage: 230,

		effect: {
			en: "During your next turn, this Pokémon can't use Max Bolt."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card