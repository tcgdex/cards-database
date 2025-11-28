import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Cofagrigus"
	},

	illustrator: "kawayoo",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [563],
	hp: 120,
	types: ["Psychic"],

	evolveFrom: {
		en: "Yamask"
	},

	description: {
		en: "There are many depictions of Cofagrigus\ndecorating ancient tombs. They're symbols\nof the wealth that kings of bygone eras had."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Soul Shot"
		},

		damage: 120,
		cost: ["Psychic", "Psychic"],

		effect: {
			en: "Discard 2 cards from your hand. If you can't discard 2 cards, this attack does nothing."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-gyarados"]
}

export default card