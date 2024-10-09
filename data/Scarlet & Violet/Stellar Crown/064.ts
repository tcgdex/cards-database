import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Milcery",
		fr: "Crèmy",
		es: "Milcery",
		it: "Milcery",
		pt: "Milcery",
		de: "Hokumil"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Mumble",
			fr: "Murmure",
			es: "Farfullar",
			it: "Borbottio",
			pt: "Resmungo",
			de: "Grummeln"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card