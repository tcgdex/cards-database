import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Glameow"
	},

	illustrator: "matazo",
	rarity: "One Star",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "It claws if displeased and purrs when affectionate. Its fickleness is very popular among some."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Pose"
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

	retreat: 1
}

export default card
