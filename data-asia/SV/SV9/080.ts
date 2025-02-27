import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "オンバット",
		'zh-tw': "嗡蝠",
		'zh-cn': "嗡蝠"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	dexId: [714],
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "大きな 耳から 超音波を 出して エサの 果物を 探す。 カジッチュを エサと 間違える。",
		'zh-tw': "從大大的耳朵發出超音波， 尋找水果來填飽肚子。 會把啃果蟲誤認成食物。",
		'zh-cn': "從大大的耳朵發出超音波， 尋找水果來填飽肚子。 會把啃果蟲誤認成食物。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "クイックドロー",
			'zh-tw': "快速抽出",
			'zh-cn': "快速抽出"
		},

		damage: 10,

		effect: {
			ja: "自分の山札を1枚引く。",
			'zh-tw': "從自己的牌庫抽出1張卡。",
			'zh-cn': "從自己的牌庫抽出1張卡。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card