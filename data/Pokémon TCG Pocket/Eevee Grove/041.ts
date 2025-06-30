import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Mienshao"
	},

	illustrator: "Shibuzoh.",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		en: "Mienfoo"
	},

	description: {
		en: "When Mienshao comes across a truly challenging\nopponent, it will lighten itself by biting off the\nfur on its arms."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Low Kick"
		},

		damage: 70,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1
}

export default card