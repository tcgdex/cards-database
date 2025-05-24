import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [616],
	set: Set,

	name: {
		en: "Shelmet",
		fr: "Escargaume",
		es: "Shelmet",
		it: "Shelmet",
		pt: "Shelmet",
		de: "Schnuthelm"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",
	retreat: 3,
	regulationMark: "E",
	illustrator: "Shibuzoh.",

	description: {
		en: "It has a strange physiology that responds to electricity. When together with Karrablast, Shelmet evolves for some reason."
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Spit Beam",
			fr: "Rayon Cracheur",
			de: "Spuckstrahl",
			es: "Rayo Escupitajo",
			pt: "Raio de Cuspe",
			it: "Raggiosputo"
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