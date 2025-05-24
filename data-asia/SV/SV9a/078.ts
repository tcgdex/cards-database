import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヘイラッシャex",
		'zh-tw': "吃吼霸ex",
		'zh-cn': "吃吼霸ex"
	},

	illustrator: "N-DESIGN Inc.",
	rarity: "None",
	category: "Pokemon",
	hp: 260,
	types: ["Water"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			ja: "おおなみがえし",
			'zh-tw': "駭浪反攻",
			'zh-cn': "駭浪反攻"
		},

		damage: "30+",

		effect: {
			ja: "このポケモンにのっているダメカンの数×10ダメージ追加。",
			'zh-tw': "增加這隻寶可夢身上放置的傷害指示物的數量×10點傷害。",
			'zh-cn': "增加這隻寶可夢身上放置的傷害指示物的數量×10點傷害。"
		}
	}, {
		cost: ["Water", "Water", "Colorless", "Colorless"],

		name: {
			ja: "ダイナミックダイブ",
			'zh-tw': "極限俯衝",
			'zh-cn': "極限俯衝"
		},

		damage: "120+",

		effect: {
			ja: "のぞむなら、120ダメージ追加。その場合、このポケモンにも50ダメージ。",
			'zh-tw': "若希望，增加120點傷害。這個情況下，這隻寶可夢也受到50點傷害。",
			'zh-cn': "若希望，增加120點傷害。這個情況下，這隻寶可夢也受到50點傷害。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "I"
}

export default card