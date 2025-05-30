import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Houndour",
		fr: "Malosse",
		de: "Hunduster",
		it: "Houndour",
		es: "Houndour",
		pt: "Houndour"
	},

	illustrator: "nagimiso",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Bite",
			fr: "Morsure",
			de: "Biss",
			it: "Morso",
			es: "Mordisco",
			pt: "Mordida"
		},

		damage: 10
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			en: "Flare",
			fr: "Flamboiement",
			de: "Flackern",
			it: "Fiammata",
			es: "Llama",
			pt: "Chama"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card