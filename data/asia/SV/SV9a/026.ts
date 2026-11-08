import { Card } from "models/database/card"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "カスミのギャラドス",
		'zh-tw': "<小霞的>暴鯉龍",
		'zh-cn': "<小霞的>暴鯉龍"
	},

	illustrator: "GOSSAN",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [130],
	hp: 180,
	types: ["Water"],

	description: {
		'ja-jp': "一度 姿を 現すと まわりを すべて 焼き尽くさないと 怒りが 鎮まらない という。",
		'zh-tw': "據說暴鯉龍一旦現身， 如果不把周圍的一切都 燃燒殆盡，怒火就不會平息。",
		'zh-cn': "據說暴鯉龍一旦現身， 如果不把周圍的一切都 燃燒殆盡，怒火就不會平息。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'ja-jp': "ザブザブパニック",
			'zh-tw': "嘩啦嘩啦恐慌",
			'zh-cn': "嘩啦嘩啦恐慌"
		},

		damage: "70×",

		effect: {
			'ja-jp': "自分の山札を上から7枚トラッシュし、その中にある「カスミのポケモン」の枚数×70ダメージ。",
			'zh-tw': "將自己的牌庫上方7張卡丟棄，造成其中「小霞的寶可夢」的張數×70點傷害。",
			'zh-cn': "將自己的牌庫上方7張卡丟棄，造成其中「小霞的寶可夢」的張數×70點傷害。"
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'ja-jp': "たきのぼり",
			'zh-tw': "攀瀑",
			'zh-cn': "攀瀑"
		},

		damage: 120
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "I"
}

export default card