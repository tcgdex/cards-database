import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "藏瑪然特"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		'zh-tw': "能夠反彈一切的攻擊，因此被稱為格鬥王之盾，受到人們的畏懼與尊崇。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "金屬武器"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇1張基本能量卡，附於這隻寶可夢身上。"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "奇幻之盾"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢不會受到「寶可夢【VMAX】」招式的傷害。"
		},

		damage: 180,
		cost: ["Lightning", "Fighting", "Metal"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
