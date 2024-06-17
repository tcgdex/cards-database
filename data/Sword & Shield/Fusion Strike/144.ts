import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [343],
	set: Set,

	name: {
		en: "Baltoy",
		fr: "Balbuto",
		es: "Baltoy",
		it: "Baltoy",
		pt: "Baltoy",
		de: "Puppance"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Sumiyoshi Kizuki",

	description: {
		en: "It was discovered in ancient ruins. While moving, it constantly spins. It stands on one foot even when asleep."
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Smack"
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