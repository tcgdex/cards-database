import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "N's Zorua",
		fr: "Zorua de N",
		de: "Ns Zorua",
		es: "Zorua de N",
		it: "Zorua di N",
		pt: "Zorua do N"
	},

	illustrator: "Megumi Mizutani",
	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Scratch",
			fr: "Griffe",
			de: "Kratzer",
			es: "Arañazo",
			it: "Graffio",
			pt: "Arranhão"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card