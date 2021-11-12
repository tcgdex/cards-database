import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Sandslash",
		fr: "Sablaireau",
		es: "Sandslash",
		it: "Sandslash",
		pt: "Sandslash",
		de: "Sandamer"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	evolveFrom: {
		en: "Sandshrew",
		fr: "Sabelette",
		es: "Sandshrew",
		it: "Sandshrew",
		pt: "Sandshrew",
		de: "Sandan"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Kyoko Umemoto",

	description: {
		en: "Thanks to its thick claws, it's good at climbing trees. There are plenty of Sandslash that park themselves in trees and go right to sleep."
	},

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Dig Uppercut"
		},

		damage: 60,

		effect: {
			en: "Put a card from your discard pile into your hand."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card