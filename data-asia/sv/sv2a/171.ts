import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "カメール",
		'zh-tw': "卡咪龜"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	dexId: [8],
	hp: 100,
	types: ["Water"],

	description: {
		ja: "ふさふさの 耳と しっぽを たくみに 操って 水中での バランスを たもつ。",
		'zh-tw': "會靈巧地擺動自己毛茸茸的耳朵和尾巴，藉此在水中保持平衡。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "すもぐり",
			'zh-tw': "自由潛水"
		},

		effect: {
			ja: "自分のトラッシュから「基本エネルギー」を3枚まで選び、相手に見せて、手札に加える。",
			'zh-tw': "從自己的棄牌區選擇最多3張「基本【水】能量」卡，在給對手看過後加入手牌。"
		}
	}, {
		cost: ["Water", "Water"],

		name: {
			ja: "かいてんアタック",
			'zh-tw': "迴轉攻擊"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card