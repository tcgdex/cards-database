import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Aipom"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [190],
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "It searches for prey from the tops of trees.\nWhen it spots its favorite food, Bounsweet,\nAipom gets excited and pounces."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Tail Smash"
		},

		damage: 40,
		cost: ["Colorless"],

		effect: {
			en: "Flip a coin. If tails, this attack does nothing."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria"]
}

export default card