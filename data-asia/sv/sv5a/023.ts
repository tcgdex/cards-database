import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "ケロマツ",
		'zh-tw': "呱呱泡蛙"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	dexId: [656],
	hp: 60,
	types: ["Water"],

	description: {
		ja: "胸と 背中から 泡を 出す。 弾力のある 泡で 攻撃を 受け止めて ダメージを 減らす。",
		'zh-tw': "從胸口和背上做出泡泡。 以富有彈力的泡泡抵擋攻擊， 減少所受的傷害。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "むれる",
			'zh-tw': "群聚"
		},

		effect: {
			ja: "自分の山札から「ケロマツ」を2枚まで選び、ベンチに出す。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇最多2張「呱呱泡蛙」，放置於備戰區。並且重洗牌庫。"
		}
	}, {
		cost: ["Water"],

		name: {
			ja: "はねまわる",
			'zh-tw': "活蹦亂跳"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card