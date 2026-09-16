import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Hisuian Zorua",
		fr: "Zorua de Hisui",
		de: "Hisui-Zorua",
		es: "Zorua de Hisui",
		it: "Zorua di Hisui",
		'es-mx': "Zorua de Hisui"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Scratch",
			fr: "Griffe",
			de: "Kratzer",
			es: "Arañazo",
			it: "Graffio",
			'es-mx': "Arañazo"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card