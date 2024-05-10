import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "プラスル",
		'zh-tw': "正電拍拍"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	dexId: [311],
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "電柱から 電気を 吸い取る。 体に ためた 電気を ショートさせて 音を 出す。",
		'zh-tw': "能從電線桿上吸取電力。 會透過讓體內儲存的 電流短路來發出聲音。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ダメージプラス",
			'zh-tw': "傷害正電"
		},

		damage: "10+",

		effect: {
			ja: "相手のバトルポケモンにのっているダメカンの数×10ダメージ追加。",
			'zh-tw': "增加對手的戰鬥寶可夢身上放置的傷害指示物的數量×10點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card