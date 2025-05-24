import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "火稚雞",
		'zh-cn': "火稚雞",
		ja: "アチャモ"
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'zh-tw': "肚子裡有火袋。 抱在懷裡暖烘烘的很溫暖。 只要生命尚存火焰就會持續燃燒。",
		'zh-cn': "肚子裡有火袋。 抱在懷裡暖烘烘的很溫暖。 只要生命尚存火焰就會持續燃燒。",
		ja: "お腹に 炎袋を 持つ。 抱きしめると ぽかぽか 温かい。 命ある 限り 燃え続ける。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "呼喚",
			'zh-cn': "呼喚",
			ja: "もってくる"
		},

		effect: {
			'zh-tw': "從自己的牌庫抽出1張卡。",
			'zh-cn': "從自己的牌庫抽出1張卡。",
			ja: "自分の山札を1枚引く。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "烈焰",
			'zh-cn': "烈焰",
			ja: "かえん"
		},

		damage: 10,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [255]
}

export default card