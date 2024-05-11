import { Card } from "../../../interfaces"
import Set from "../S7R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "毽子棉"
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'zh-tw': "不管迎上什麼樣的風，都能隨心所欲地操縱絨毛，前往世界上自己喜歡的地方。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "棉絮連打"
		},

		effect: {
			'zh-tw': "這隻寶可夢可使用招式2次。（若對手的戰鬥寶可夢因第1次的招式而【氣絕】了，則在下一隻寶可夢放置於戰鬥場後，使用第2次的招式。）"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "迴轉攻擊"
		},

		damage: 60,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "E"
}

export default card