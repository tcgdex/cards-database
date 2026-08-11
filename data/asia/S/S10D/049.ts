import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "起源帝牙盧卡VSTAR"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 280,
	types: ["Metal"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "金屬爆破"
		},

		effect: {
			'zh-tw': "增加這隻寶可夢身上附加的【鋼】能量的數量×40點傷害。"
		},

		damage: "40+",
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "[VSTAR力量]星星柯羅諾斯"
		},

		effect: {
			'zh-tw': "這個回合結束後，再開始1次自己的回合。[對戰中，己方只可使用1次【VSTAR】力量。]"
		},

		damage: 220,
		cost: ["Metal", "Metal", "Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card