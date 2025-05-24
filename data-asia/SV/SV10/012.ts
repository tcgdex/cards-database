import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "奧利瓦ex",
		'zh-cn': "奧利瓦ex",
		ja: "オリーヴァex"
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 310,
	types: ["Grass"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'zh-tw': "油之機關槍",
			'zh-cn': "油之機關槍",
			ja: "オイルマシンガン"
		},

		effect: {
			'zh-tw': "選擇6次對手的寶可夢，對所選的所有寶可夢不計算弱點・抵抗力，造成其選擇次數×20點傷害。（1隻可選擇2次以上。）",
			'zh-cn': "選擇6次對手的寶可夢，對所選的所有寶可夢不計算弱點・抵抗力，造成其選擇次數×20點傷害。（1隻可選擇2次以上。）",
			ja: "相手のポケモンを6回選び、選んだポケモン全員に、弱点・抵抗力を計算せず、選んだ回数×20ダメージ。（1匹を2回以上選べる。）"
		},

		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "芳香射擊",
			'zh-cn': "芳香射擊",
			ja: "アロマシュート"
		},

		effect: {
			'zh-tw': "將這隻寶可夢的特殊狀態全部恢復。",
			'zh-cn': "將這隻寶可夢的特殊狀態全部恢復。",
			ja: "このポケモンの特殊状態を、すべて回復する。"
		},

		damage: 160,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Double rare"
}

export default card