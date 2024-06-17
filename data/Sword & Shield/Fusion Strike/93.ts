import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [405],
	set: Set,

	name: {
		en: "Luxray",
		fr: "Luxray",
		es: "Luxray",
		it: "Luxray",
		pt: "Luxray",
		de: "Luxtra"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	evolveFrom: {
		en: "Luxio",
		fr: "Luxio",
		es: "Luxio",
		it: "Luxio",
		pt: "Luxio",
		de: "Luxio"
	},

	stage: "Stage2",
	retreat: 0,
	regulationMark: "E",
	illustrator: "Atsushi Furusawa",

	description: {
		en: "Luxray's ability to see through objects comes in handy when it's scouting for danger."
	},

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Thunder Claws"
		},

		damage: 90
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card