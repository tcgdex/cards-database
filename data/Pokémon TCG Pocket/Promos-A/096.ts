import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Houndoom"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	evolveFrom: {
		en: "Houndour"
	},

	description: {
		en: "If you are burned by the flames it shoots from its\nmouth, the pain will never go away."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Diving Swipe"
		},

		damage: 70,
		cost: ["Darkness", "Darkness", "Darkness"],

		effect: {
			en: "Discard a random card from your opponent's hand."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card