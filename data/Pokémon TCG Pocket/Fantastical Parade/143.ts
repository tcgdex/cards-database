import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Maushold"
	},

	illustrator: "MINAMINAMI Take",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	evolveFrom: {
		en: "Tandemaus"
	},

	description: {
		en: "The larger pair protects the little ones during\nbattles. When facing strong opponents, the\nwhole group will join the fight."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Family Beatdown"
		},

		damage: 60,
		cost: ["Colorless"],

		effect: {
			en: "Flip a coin for each Tandemaus and Maushold you have in play. This attack does 60 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card