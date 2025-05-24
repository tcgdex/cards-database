import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "ペパーのマフィティフex",
		'zh-tw': "<派帕的>獒教父ex",
		'zh-cn': "<派帕的>獒教父ex"
	},

	illustrator: "akagi",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Darkness"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ハッスルタックル",
			'zh-tw': "幹勁衝撞",
			'zh-cn': "幹勁衝撞"
		},

		damage: "30+",

		effect: {
			ja: "このポケモンにダメカンがのっていないなら、120ダメージ追加。",
			'zh-tw': "若這隻寶可夢身上沒有放置傷害指示物，則增加120點傷害。",
			'zh-cn': "若這隻寶可夢身上沒有放置傷害指示物，則增加120點傷害。"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "おやぶんヘッド",
			'zh-tw': "大佬頭擊",
			'zh-cn': "大佬頭擊"
		},

		damage: 210,

		effect: {
			ja: "次の自分の番、このポケモンは「おやぶんヘッド」が使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「大佬頭擊」。",
			'zh-cn': "在下個自己的回合，這隻寶可夢無法使用「大佬頭擊」。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card