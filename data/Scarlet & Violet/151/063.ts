import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [63],
	set: Set,

	name: {
		fr: "Abra",
		en: "Abra",
		es: "Abra",
		it: "Abra",
		pt: "Abra",
		de: "Abra"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			fr: "Piqûre Psy",
			en: "Psyshot",
			es: "Disparo Psi",
			it: "Psicosparo",
			pt: "Tiro Psíquico",
			de: "Psychoschuss"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Mitsuhiro Arita",

	thirdParty: {
		cardmarket: 733658
	}
}

export default card