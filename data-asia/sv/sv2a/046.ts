import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "パラス",
		'zh-tw': "派拉斯"
	},

	illustrator: "Yoriyuki Ikegami",
	rarity: "Common",
	category: "Pokemon",
	dexId: [46],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "冬虫夏草と いう キノコが 虫を 操っているのだ。 虫の 意思は 無視される。",
		'zh-tw': "控制蟲子的是一種 叫做冬蟲夏草的蕈類。 蟲子的意志會被忽視。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "ふむ",
			'zh-tw': "踩"
		},

		damage: 10
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			ja: "ほうしだま",
			'zh-tw': "孢子彈"
		},

		damage: 20,

		effect: {
			ja: "相手のバトルポケモンをねむりにする。",
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card