import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "サンダース",
		'zh-tw': "雷伊布"
	},

	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [135],
	hp: 110,
	types: ["Lightning"],

	description: {
		ja: "細胞が 出している 弱い 電気を ひとまとめにして 強力な 電撃を 放つ。",
		'zh-tw': "會把細胞發出的微弱電流都集中起來 釋放強力的電擊。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "ちょくげきだん",
			'zh-tw': "直擊彈"
		},

		effect: {
			ja: "相手のポケモン1匹に、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的1隻寶可夢受到30點傷害。[在備戰區不計算弱點・抵抗力。]"
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			ja: "とうしのいかずち",
			'zh-tw': "鬥志雷霆"
		},

		damage: "90+",

		effect: {
			ja: "相手のバトルポケモンが「ポケモンex・V」なら、90ダメージ追加。",
			'zh-tw': "若對手的戰鬥寶可夢為「寶可夢【ex】・【V】」，則增加90點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card