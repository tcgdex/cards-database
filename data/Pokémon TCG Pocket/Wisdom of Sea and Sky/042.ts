import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Seadra",
		fr: "Hypocéan"
	},

	illustrator: "sui",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	evolveFrom: {
		en: "Horsea"
	},

	description: {
		en: "It's the males that raise the offspring. While\nSeadra are raising young, the spines on their\nbacks secrete thicker and stronger poison.",
		fr: "Les mâles s'occupent des petits, et tant qu'ils en ont à élever, le venin contenu dans leurs épines dorsales devient beaucoup plus fort."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Razor Fin",
			fr: "Aileron-Rasoir"
		},

		damage: 50,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card