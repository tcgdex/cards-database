import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "捷拉奧拉VMAX",
		ja: "ゼラオラVMAX"
	},

	illustrator: "aoki",
	category: "Pokemon",
	hp: 320,
	types: ["Lightning"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "反應脈衝",
			ja: "リアクトパルス"
		},

		effect: {
			'zh-tw': "造成對手場上擁有特性的寶可夢的數量×60點傷害。",
			ja: "相手の場の特性を持つポケモンの数×60ダメージ。"
		},

		damage: "60×",
		cost: ["Lightning", "Lightning"]
	}, {
		name: {
			'zh-tw': "極巨電拳",
			ja: "ダイフィスト"
		},

		effect: {
			'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。",
			ja: "このポケモンについているエネルギーを2個選び、トラッシュする。"
		},

		damage: 240,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card