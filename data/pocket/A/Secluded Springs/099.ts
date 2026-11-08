import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Gabite",
		'fr-fr': "Carmache"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [444],
	hp: 80,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Gible"
	},

	description: {
		'en-us': "In rare cases, it molts and sheds its scales.\nMedicine containing its scales as an ingredient\nwill make a weary body feel invigorated.",
		'fr-fr': "Lorsqu'il mue, il perd parfois ses écailles. Les remèdes concoctés à partir de celles-ci sont de puissants toniques."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Sharp Scythe",
			'fr-fr': "Faucille Acérée"
		},

		damage: 30,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card