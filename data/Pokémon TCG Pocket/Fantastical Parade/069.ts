import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Chandelure"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	evolveFrom: {
		en: "Lampent"
	},

	description: {
		en: "It absorbs spirits, which it then burns. By waving\nthe flames on its arms, it puts its foes into a\nhypnotic trance."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Past Friends"
		},

		damage: 60,
		cost: ["Psychic", "Psychic"],

		effect: {
			en: "This attack does 20 more damage for each Supporter card in your discard pile."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2
}

export default card