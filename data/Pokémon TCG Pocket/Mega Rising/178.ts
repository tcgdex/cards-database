import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Sliggoo",
		fr: "Colimucus"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [705],
	hp: 90,
	types: ["Dragon"],

	evolveFrom: {
		en: "Goomy",
		fr: "Mucuscule"
	},

	description: {
		en: "When Sliggoo senses danger, the mucus coating\nits entire body becomes more concentrated—\nit'll dissolve anything."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Gentle Slap",
			fr: "Gifle Douce"
		},

		damage: 60,
		cost: ["Water", "Psychic"]
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-altaria"]
}

export default card