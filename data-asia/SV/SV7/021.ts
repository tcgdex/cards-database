import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "霓虹魚",
		'zh-cn': "霓虹魚",
		ja: "ネオラント"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'zh-tw': "在深海的海底發光的霓虹魚 看起來就像是夜空中 閃閃發亮的星星。",
		'zh-cn': "在深海的海底發光的霓虹魚 看起來就像是夜空中 閃閃發亮的星星。",
		ja: "深い 海の 底で 光る ネオラントは まるで 夜空に 輝く 星のように 見える。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "報恩",
			'zh-cn': "報恩",
			ja: "おんがえし"
		},

		effect: {
			'zh-tw': "若希望，從牌庫抽卡直到自己的手牌滿6張為止。",
			'zh-cn': "若希望，從牌庫抽卡直到自己的手牌滿6張為止。",
			ja: "のぞむなら、自分の手札が6枚になるように、山札を引く。"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "鰭快刀",
			'zh-cn': "鰭快刀",
			ja: "ひれカッター"
		},

		damage: 70,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [457]
}

export default card