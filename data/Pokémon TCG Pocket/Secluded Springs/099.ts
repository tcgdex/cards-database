import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Gabite",
		fr: "Carmache"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	evolveFrom: {
		en: "Gible"
	},

	description: {
		en: "In rare cases, it molts and sheds its scales.\nMedicine containing its scales as an ingredient\nwill make a weary body feel invigorated.",
		fr: "Lorsqu'il mue, il perd parfois ses écailles. Les remèdes concoctés à partir de celles-ci sont de puissants toniques."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Sharp Scythe",
			fr: "Faucille Acérée"
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