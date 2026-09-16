import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Toxtricity",
		fr: "Salarsen",
		de: "Riffex",
		es: "Toxtricity",
		it: "Toxtricity",
		'es-mx': "Toxtricity"
	},

	illustrator: "Haru Akasaka",
	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Mach Bolt",
			fr: "Éclair Fulgurant",
			de: "Flotter Sprung",
			es: "Rayo Mach",
			it: "Fulmine Mach",
			'es-mx': "Superrayo"
		},

		damage: 80,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card