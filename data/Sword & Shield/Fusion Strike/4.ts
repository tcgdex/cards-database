import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Shroomish",
		fr: "Balignon",
		es: "Shroomish",
		it: "Shroomish",
		pt: "Shroomish",
		de: "Knilz"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Naoyo Kimura",

	description: {
		en: "It spouts poison spores from the top of its head. These spores cause pain all over if inhaled."
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Tackle"
		},

		damage: 10
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Seed Bomb"
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