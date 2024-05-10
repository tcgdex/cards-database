import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {
		ja: "コリンク",
		'zh-tw': "小貓怪"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Yuu Nishida",
	dexId: [403],
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "筋肉が 伸び縮み することで 電気が 発生。 ピンチになると 体毛が まぶしく 光る。",
		'zh-tw': "只要伸縮肌肉就能夠 產生電流。身陷危機時 體毛會發出刺眼的亮光。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "こうきしん",
			'zh-tw': "好奇心"
		},

		effect: {
			ja: "相手の手札を見る。",
			'zh-tw': "查看對手的手牌。"
		}
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			ja: "バチバチ",
			'zh-tw': "劈哩啪啦"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card
