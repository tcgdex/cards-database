import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "噴火龍GX"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 250,
	types: ["Fire"],
	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "翅膀攻擊"
		},

		damage: 70,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "紅蓮風暴"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上所附加的3個【火】能量丟到棄牌區。"
		},

		damage: 300,
		cost: ["Fire", "Fire", "Fire", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "怒火中燒GX"
		},

		effect: {
			'zh-tw': "將對手的牌庫上方的10張丟到棄牌區。［對戰中，己方只可使用1次GX招式。］"
		},

		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "A"
}

export default card