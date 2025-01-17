import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Sneasel",
		fr: "Farfuret",
		es: "Sneasel",
		pt: "Sneasel",
		it: "Sneasel",
		de: "Sniebel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Claw Slash",
			fr: "Tranch'Griffe",
			es: "Cuchillada Garra",
			pt: "Golpe de Garra",
			it: "Lacerartiglio",
			de: "Klauenschlitzer"
		},

		damage: 20
	}],

	retreat: 0,
	regulationMark: "H"
}

export default card