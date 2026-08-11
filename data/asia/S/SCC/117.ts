import { Card } from "../../../interfaces"
import Set from "../SCC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "幸福蛋V"
	},

	illustrator: "Saki Hayashiro",
	category: "Pokemon",
	hp: 250,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "自然回復"
		},

		effect: {
			'zh-tw': "每次從自己的手牌將能量附於這隻寶可夢身上時，都將這隻寶可夢的特殊狀態全部恢復。"
		}
	}, {
		name: {
			'zh-tw': "幸福轟炸"
		},

		effect: {
			'zh-tw': "增加這隻寶可夢身上附加的能量的數量×30點傷害。若希望，在造成傷害後，從棄牌區選擇最多3張能量卡，附於這隻寶可夢身上。"
		},

		damage: "10+",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E"
}

export default card