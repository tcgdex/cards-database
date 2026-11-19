import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "エネコ"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [300],
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			ja: "ちいさなおつかい"
		},

		effect: {
			ja: "自分の山札から基本エネルギーを2枚選び出し、相手プレイヤーに見せてから、手札に加える。その後、その山札を切る。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			ja: "こもりうた"
		},

		effect: {
			ja: "相手をねむりにする。"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	variants: [
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784528,
				tcgplayer: 613093,
				cardtrader: 138028,
			},
		},
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784528,
				tcgplayer: 613093,
				cardtrader: 138028,
			},
		},
	]
}

export default card
