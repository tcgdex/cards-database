import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ストリンダー",
		'zh-tw': "顫弦蠑螈"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [849],
	hp: 130,
	types: ["Lightning"],

	description: {
		ja: "荒々しく 胸もとの 突起を かき鳴らして 放つ 電撃は １５０００ボルトを 軽く 超える。",
		'zh-tw': "會激烈地彈奏胸部的突起物。彈奏時釋放出的電擊， 可以輕易超過１５０００伏特。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "むしりとる",
			'zh-tw': "拔除"
		},

		effect: {
			ja: "相手の手札からオモテを見ないで2枚選び、そのカードのオモテを見て、相手の山札にもどして切る。",
			'zh-tw': "在不看正面的情況下，從對手的手牌選擇2張，查看那些卡的正面後放回對手的牌庫並重洗。"
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			ja: "かみなり",
			'zh-tw': "打雷"
		},

		damage: 120,

		effect: {
			ja: "このポケモンにも20ダメージ。",
			'zh-tw': "這隻寶可夢也受到20點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card