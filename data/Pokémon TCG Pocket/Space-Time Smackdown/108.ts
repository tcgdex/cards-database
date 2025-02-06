import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Toxicroak"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	evolveFrom: {
		en: "Croagunk"
	},

	description: {
		en: "Swaying and dodging the attacks of its foes, it weaves its flexible body in close, then lunges out with its poisonous claws."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Group Beatdown"
		},

		damage: "40×",
		cost: ["Darkness", "Darkness"],

		effect: {
			en: "Flip a coin for each Pokémon you have in play. This attack does 40 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card
