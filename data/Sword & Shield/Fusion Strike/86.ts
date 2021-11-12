import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu V",
		fr: "Pikachu V",
		es: "Pikachu V",
		it: "Pikachu V",
		pt: "Pikachu V",
		de: "Pikachu V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",
	retreat: 1,
	regulationMark: "E",
	illustrator: "5ban Graphics",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Tail Whap"
		},

		damage: 20
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			en: "Thunderbolt"
		},

		damage: 100
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card