import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鰓魚龍V"
	},

	illustrator: "Satoshi Shirai",
	category: "Pokemon",
	hp: 220,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "咬咬粉碎"
		},

		effect: {
			'zh-tw': "在造成傷害前，將對手的戰鬥寶可夢身上附加的「寶可夢道具」丟棄。有丟棄的情況下，增加120點傷害。"
		},

		damage: "60+",
		cost: ["Grass", "Water"]
	}, {
		name: {
			'zh-tw': "龍之強襲"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「龍之強襲」。"
		},

		damage: 210,
		cost: ["Grass", "Water", "Water"]
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card