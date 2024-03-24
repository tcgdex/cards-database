import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Abra",
		fr: "Abra",
		es: "Abra",
		it: "Abra",
		pt: "Abra"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Psyshot",
			fr: "Piqûre Psy",
			es: "Disparo Psi",
			it: "Psicosparo",
			pt: "Tiro Psíquico"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card