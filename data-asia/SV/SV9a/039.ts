import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "ロトム",
		'zh-tw': "洛托姆",
		'zh-cn': "洛托姆"
	},

	illustrator: "Yoshimi Miyoshi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [479],
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "電気のような 体は 一部の 機械に 入り込むことが できる。 そして その体で いたずらする。",
		'zh-tw': "如同電一般的身體 能進到一部分的機器裡， 並用其作為身體來惡作劇。",
		'zh-cn': "如同電一般的身體 能進到一部分的機器裡， 並用其作為身體來惡作劇。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "おどろかす",
			'zh-tw': "驚嚇",
			'zh-cn': "驚嚇"
		},

		damage: 20,

		effect: {
			ja: "相手の手札からオモテを見ないで1枚選び、そのカードのオモテを見て、相手の山札にもどして切る。",
			'zh-tw': "在不看正面的情況下，從對手的手牌選擇1張，查看那張卡的正面後放回對手的牌庫並重洗。",
			'zh-cn': "在不看正面的情況下，從對手的手牌選擇1張，查看那張卡的正面後放回對手的牌庫並重洗。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ガジェットショー",
			'zh-tw': "配件秀",
			'zh-cn': "配件秀"
		},

		damage: "30×",

		effect: {
			ja: "自分のポケモン全員についている「ポケモンのどうぐ」の数×30ダメージ。",
			'zh-tw': "造成自己的所有寶可夢身上附加的「寶可夢道具」卡的數量×30點傷害。",
			'zh-cn': "造成自己的所有寶可夢身上附加的「寶可夢道具」卡的數量×30點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card