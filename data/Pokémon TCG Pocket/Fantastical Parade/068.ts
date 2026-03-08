import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Lampent"
	},

	illustrator: "MAHOU",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		en: "Litwick"
	},

	description: {
		en: "The spirits it absorbs fuel its baleful fire. It hangs\naround hospitals waiting for people to pass on."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Petty Grudge"
		},

		damage: 30,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card