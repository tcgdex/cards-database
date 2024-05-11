import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "藏飽栗鼠"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		'zh-tw': "在尾巴裡囤積樹果。雖然囤過頭了就會掉出來，但遲鈍的牠不會發現。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "削落"
		},

		effect: {
			'zh-tw': "在造成傷害前，將對手的戰鬥寶可夢身上附加的「寶可夢道具」丟棄。"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "暴力撤退"
		},

		effect: {
			'zh-tw': "將這隻寶可夢與附加的卡，全部放回手牌。"
		},

		damage: 100,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
