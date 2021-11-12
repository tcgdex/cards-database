import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Drilbur",
		fr: "Rototaupe",
		es: "Drilbur",
		it: "Drilbur",
		pt: "Drilbur",
		de: "Rotomurf"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",
	retreat: 2,
	regulationMark: "E",
	illustrator: "tetsuya koizumi",

	description: {
		en: "It's a digger, using its claws to burrow through the ground. It causes damage to vegetable crops, so many farmers have little love for it."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Scratch"
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