import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Ralts",
		fr: "Tarsal",
		de: "Trasla",
		it: "Ralts",
		es: "Ralts",
		pt: "Ralts"
	},

	illustrator: "Tika Matsuno",
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
			de: "Psychoschuss",
			it: "Psicosparo",
			es: "Disparo Psi",
			pt: "Tiro Psíquico"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card