import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 野蠻鱸魚"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		'zh-tw': "此寶可夢具有多項野蠻鱸魚的特徵，雖然有性情溫馴等不同點存在， 吾人仍將其定義為野蠻鱸魚的地區形態。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "群集"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。"
		}
	}, {
		name: {
			'zh-tw': "撞擊"
		},

		damage: 10,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card