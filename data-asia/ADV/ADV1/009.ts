import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "キノココ"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	dexId: [285],
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		name: {
			ja: "ねむりごな"
		},

		effect: {
			ja: "相手をねむりにする。"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Water",
		value: "-30"
	}],

	retreat: 1,
	variants: [
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784493,
				tcgplayer: 613048,
				cardtrader: 137993,
			},
		},
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784493,
				tcgplayer: 613048,
				cardtrader: 137993,
			},
		},
	]
}

export default card
