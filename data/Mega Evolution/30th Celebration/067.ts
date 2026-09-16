import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Marill",
		fr: "Marill",
		de: "Marill",
		es: "Marill",
		it: "Marill",
		'es-mx': "Marill"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Tackle",
			fr: "Charge",
			de: "Tackle",
			es: "Placaje",
			it: "Azione",
			'es-mx': "Tacleada"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1
}

export default card