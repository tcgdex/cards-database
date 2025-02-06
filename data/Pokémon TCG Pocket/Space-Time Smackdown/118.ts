import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Probopass"
	},

	illustrator: "MAHOU",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	evolveFrom: {
		en: "Nosepass"
	},

	description: {
		en: "Although it can control its units known as Mini-Noses, they sometimes get lost and don't come back."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Triple Nose"
		},

		damage: "30+",
		cost: ["Metal", "Metal", "Metal", "Colorless"],

		effect: {
			en: "Flip 3 coins. This attack does 50 more damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 4
}

export default card
