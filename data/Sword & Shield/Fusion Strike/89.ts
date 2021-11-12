import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Plusle",
		fr: "Posipi",
		es: "Plusle",
		it: "Plusle",
		pt: "Plusle",
		de: "Plusle"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Megumi Higuchi",

	description: {
		en: "It absorbs electricity from telephone poles. It shorts out its body to create crackling noises."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Spark Duo"
		},

		damage: "20+",

		effect: {
			en: "If 1 of your Minun used an attack during your last turn, this attack does 100 more damage."
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