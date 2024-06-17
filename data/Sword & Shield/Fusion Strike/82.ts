import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [846],
	set: Set,

	name: {
		en: "Arrokuda",
		fr: "Embrochet",
		es: "Arrokuda",
		it: "Arrokuda",
		pt: "Arrokuda",
		de: "Pikuda"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Miki Tanaka",

	description: {
		en: "After it's eaten its fill, its movements become extremely sluggish. That's when Cramorant swallows it up."
	},

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Peck"
		},

		damage: 10
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card