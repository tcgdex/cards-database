import { Card } from "../../../interfaces"
import Set from "../SLL"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "土地雲",
		ja: "ランドロス"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		'zh-tw': "吸收風與雷後轉化成的能量能夠給予土壤營養，讓大地變得豐饒。",
		ja: "風や 雷を 取りこみ 変えた エネルギーが 土に 栄養を 与えて 大地を 豊かに する。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "巴掌撲擊",
			ja: "はりて"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "粉碎刀鋒",
			ja: "スマッシュエッジ"
		},

		effect: {
			'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。",
			ja: "このポケモンについているエネルギーを2個選び、トラッシュする。"
		},

		damage: 130,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	dexId: [645]
}

export default card