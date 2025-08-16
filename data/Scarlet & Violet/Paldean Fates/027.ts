import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [280],
	set: Set,

	name: {
		en: "Ralts",
		fr: "Tarsal",
		es: "Ralts",
		it: "Ralts",
		pt: "Ralts",
		de: "Trasla"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Psyshot",
			fr: "Piqûre Psy",
			es: "Disparo Psi",
			it: "Psicosparo",
			pt: "Tiro Psíquico",
			de: "Psychoschuss"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Tika Matsuno",

	thirdParty: {
		cardmarket: 751560
	}
}

export default card