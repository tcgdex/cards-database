import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "ラッキーex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [113],
	hp: 120,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "ex",

	attacks: [{
		name: {
			ja: "いやしのタマゴ"
		},

		effect: {
			ja: "自分以外の自分のポケモン全員から、ダメージカウンターをそれぞれ2個ずつとりのぞく。"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			ja: "すてみタックル"
		},

		effect: {
			ja: "自分にも60ダメージ。"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	variants: [
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784520,
				tcgplayer: 613079,
				cardtrader: 138020,
			},
		},
		{
			type: "holo",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784520,
				tcgplayer: 613079,
				cardtrader: 138020,
			},
		},
	]
}

export default card
