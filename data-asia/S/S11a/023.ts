import { Card } from "../../../interfaces"
import Set from "../S11a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "阿羅拉 六尾VSTAR"
	},

	illustrator: "PLANETA Hiiragi",
	category: "Pokemon",
	hp: 240,
	types: ["Water"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "雪之幻想"
		},

		effect: {
			'zh-tw': "這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。在下個對手的回合，這隻寶可夢不會受到擁有特性的寶可夢招式的傷害。"
		},

		damage: 160,
		cost: ["Water", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "[VSTAR力量]銀雪星星"
		},

		effect: {
			'zh-tw': "造成對手的場上的「寶可夢【V】」的數量×70點傷害。這個招式的傷害不計算弱點・抵抗力。[對戰中，己方只可使用1次【VSTAR】力量。]"
		},

		damage: "70×"
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card