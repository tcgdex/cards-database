import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Ninetales"
	},

	illustrator: "kodama",
	rarity: "Common",
	category: "Pokemon",
	dexId: [38],
	hp: 110,
	types: ["Fire"],
	stage: "Stage1",

	description: {
		en: "It has nine long tails and fur that gleams gold. It is said to live for 1,000 years."
	},

	attacks: [{
		name: {
			en: "Flame Tail"
		},

		cost: ["Fire"],

		damage: 60,
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907736,
				tcgplayer: 716444
			}
		}
	],
}

export default card
