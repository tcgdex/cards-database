import { Card } from "models/database/card"
import Set from "../SN"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "袋獸",
		'ja-jp': "ガルーラ"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		'zh-tw': "絕對不要靠近從袋獸腹中溜出來玩耍的孩子， 因為母親正在某處守護著牠。",
		'ja-jp': "袋から 抜け出して 遊んでいる 子どもには 近付いては いけない。 どこかで 母親が 見守っている。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "拍擊",
			'ja-jp': "はたく"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "親子聯合拳",
			'ja-jp': "れんけいおやこパンチ"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加100點傷害。",
			'ja-jp': "コインを1回投げオモテなら、100ダメージ追加。"
		},

		damage: "60＋",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",
	dexId: [115]
}

export default card