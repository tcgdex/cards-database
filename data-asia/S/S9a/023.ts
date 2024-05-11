import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 野蠻鱸魚",
		ja: "ヒスイ バスラオ"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		'zh-tw': "此寶可夢具有多項野蠻鱸魚的特徵，雖然有性情溫馴等不同點存在， 吾人仍將其定義為野蠻鱸魚的地區形態。",
		ja: "温厚な 気質など 相違点 あれども バスラオの 特徴を 多く 有すゆえ そのリージョンフォームと 定義す。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "群集",
			ja: "むれをあつめる"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
			ja: "自分の山札からたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。"
		}
	}, {
		name: {
			'zh-tw': "撞擊",
			ja: "たいあたり"
		},

		damage: 10,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [550]
}

export default card