import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Mudkip",
		fr: "Gobou",
		es: "Mudkip",
		it: "Mudkip",
		pt: "Mudkip",
		de: "Hydropi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "KIYOTAKA OSHIYAMA",

	description: {
		en: "To alert it, the fin on its head senses the flow of water. It has the strength to heft boulders."
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Mud-Slap"
		},

		damage: 20
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Playful Kick"
		},

		damage: 30
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card