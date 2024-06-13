import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [692],
	set: Set,

	name: {
		en: "Clauncher",
		fr: "Flingouste",
		es: "Clauncher",
		it: "Clauncher",
		pt: "Clauncher",
		de: "Scampisto"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Pani Kobayashi",

	description: {
		en: "It moves around by jetting water from its right pincer. It has a poor sense of balance, so it's terrible at swimming straight."
	},

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Water Gun"
		},

		damage: 10
	}, {
		cost: ["Water", "Colorless"],

		name: {
			en: "Vise Grip"
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