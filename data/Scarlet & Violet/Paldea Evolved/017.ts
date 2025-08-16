import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [917],
	set: Set,

	name: {
		fr: "Tissenboule",
		en: "Tarountula",
		es: "Tarountula",
		it: "Tarountula",
		pt: "Tarountula",
		de: "Tarundel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			fr: "Crochet",
			en: "Hook",
			es: "Garfio",
			it: "Uncino",
			pt: "Gancho",
			de: "Haken"
		},

		damage: 40
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Mina Nakai",

	thirdParty: {
		cardmarket: 715489
	}
}

export default card