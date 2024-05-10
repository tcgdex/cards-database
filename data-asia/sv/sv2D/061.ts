import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤヤコマ",
		'zh-tw': "小箭雀"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	dexId: [661],
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "普段は 穏やかな 気性だが 戦いになると ホルモンバランスが 変わり 攻撃的になる。",
		'zh-tw': "平時性情溫和，但在戰鬥開始後，荷爾蒙的平衡會 發生變化而變得具有攻擊性。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "きゅうこうか",
			'zh-tw': "急降"
		},

		damage: 30,

		effect: {
			ja: "このポケモンにも10ダメージ。",
			'zh-tw': "這隻寶可夢也受到10點傷害。"
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
	regulationMark: "G"
}

export default card