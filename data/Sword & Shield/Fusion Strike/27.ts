import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Zarude",
		fr: "Zarude",
		es: "Zarude",
		it: "Zarude",
		pt: "Zarude",
		de: "Zarude"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Basic",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Anesaki Dynamic",

	description: {
		en: "Once the vines on Zarude's body tear off, they become nutrients in the soil. This helps the plants of the forest grow."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Scratch"
		},

		damage: 20
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Wild Whip"
		},

		damage: "40+",

		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage."
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