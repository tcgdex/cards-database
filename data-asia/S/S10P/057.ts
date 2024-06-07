import { Card } from "../../../interfaces"
import Set from "../S10P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "月月熊"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 180,
	types: ["Colorless"],

	description: {
		'zh-tw': "考察結果顯示，正是遍布在洗翠大地上的濕地土壤，造就了牠堅實 的軀體和自在運用泥炭的新能力。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "泥炭搜尋"
		},

		effect: {
			'zh-tw': "從自己的棄牌區任意選擇最多2張卡，在給對手看過後加入手牌。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "巨體碰撞"
		},

		effect: {
			'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 200,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "F"
}

export default card