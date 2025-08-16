import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [953],
	set: Set,

	name: {
		fr: "Léboulérou",
		en: "Rellor",
		es: "Rellor",
		it: "Rellor",
		pt: "Rellor",
		de: "Relluk"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Piqûre",
			en: "Bug Bite",
			es: "Picadura",
			it: "Coleomorso",
			pt: "Picada",
			de: "Käferbiss"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Kouki Saitou",

	thirdParty: {
		cardmarket: 715498
	}
}

export default card