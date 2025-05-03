import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Lickilicky ex"
	},

	illustrator: "Jerky",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],

	evolveFrom: {
		en: "Lickitung"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Licking Fury"
		},

		damage: "100+",
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		effect: {
			en: "Flip a coin until you get tails. This attack does 40 more damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 4
}

export default card
