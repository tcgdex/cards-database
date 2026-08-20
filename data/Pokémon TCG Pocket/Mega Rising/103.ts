import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Duskull",
		fr: "Skelénox"
	},

	illustrator: "Naoki Saito",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [355],
	hp: 50,
	types: ["Psychic"],

	description: {
		en: "Making itself invisible, it silently sneaks up to\nprey. It has the ability to slip through thick walls."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Ambush",
			fr: "Embuscade"
		},

		damage: 10,
		cost: ["Psychic"],

		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts de plus."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-blaziken"]
}

export default card