import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "<火箭隊的>多邊獸Ⅱ",
		'zh-cn': "<火箭隊的>多邊獸Ⅱ",
		ja: "ロケット団のポリゴン2"
	},

	illustrator: "Takeshi Nakamura",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		'zh-tw': "利用最新科技進化的 人工寶可夢。有時會 表現出程式裡沒有的反應。",
		'zh-cn': "利用最新科技進化的 人工寶可夢。有時會 表現出程式裡沒有的反應。",
		ja: "最新科学で 進化した 人工の ポケモン。 ときどき プログラムにない 反応をみせる。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "R指令",
			'zh-cn': "R指令",
			ja: "Rコマンド"
		},

		effect: {
			'zh-tw': "造成自己的棄牌區的，名稱中有「火箭隊」的支援者卡的張數×20點傷害。",
			'zh-cn': "造成自己的棄牌區的，名稱中有「火箭隊」的支援者卡的張數×20點傷害。",
			ja: "自分のトラッシュにある、名前に「ロケット団」とつくサポートの枚数×20ダメージ。"
		},

		damage: "20×",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [233]
}

export default card