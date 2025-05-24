import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "<火箭隊的>喵喵",
		'zh-cn': "<火箭隊的>喵喵",
		ja: "ロケット団のニャース"
	},

	illustrator: "Megumi Mizutani",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'zh-tw': "白天一直都在睡覺。 到了晚上眼睛就會發光， 在自己的地盤徘徊。",
		'zh-cn': "白天一直都在睡覺。 到了晚上眼睛就會發光， 在自己的地盤徘徊。",
		ja: "昼間は 寝てばかりいる。 夜になると 目が 輝き 縄張りを 歩きまわる。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "占為己有",
			'zh-cn': "占為己有",
			ja: "ねこばば"
		},

		effect: {
			'zh-tw': "在不看正面的情況下，從對手的手牌選擇1張，查看那張卡的正面後放回對手的牌庫並重洗。",
			'zh-cn': "在不看正面的情況下，從對手的手牌選擇1張，查看那張卡的正面後放回對手的牌庫並重洗。",
			ja: "相手の手札からオモテを見ないで1枚選び、そのカードのオモテを見て、相手の山札にもどして切る。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "亂抓",
			'zh-cn': "亂抓",
			ja: "みだれひっかき"
		},

		effect: {
			'zh-tw': "擲3次硬幣，造成正面出現的次數×20點傷害。",
			'zh-cn': "擲3次硬幣，造成正面出現的次數×20點傷害。",
			ja: "コインを3回投げ、オモテの数×20ダメージ。"
		},

		damage: "20×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [52]
}

export default card