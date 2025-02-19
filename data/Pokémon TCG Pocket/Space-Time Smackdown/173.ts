import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Croagunk"
	},

	illustrator: "GOSSAN",
	rarity: "One Star",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		en: "Inflating its poison sacs, it fills the area with an odd sound and hits flinching opponents with a poison jab."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Group Beatdown"
		},

		damage: "20×",
		cost: ["Darkness", "Darkness"],

		effect: {
			en: "Flip a coin for each Pokémon you have in play. This attack does 20 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card
