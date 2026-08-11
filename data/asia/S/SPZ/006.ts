import { Card } from "models/database/card"
import Set from "../SPZ"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "捷拉奧拉VMAX",
		'ja-jp': "ゼラオラVMAX"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 320,
	types: ["Lightning"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "反應脈衝",
			'ja-jp': "リアクトパルス"
		},

		effect: {
			'zh-tw': "造成對手場上擁有特性的寶可夢的數量×60點傷害。",
			'ja-jp': "相手の場の特性を持つポケモンの数×60ダメージ。"
		},

		damage: "60×",
		cost: ["Lightning", "Lightning"]
	}, {
		name: {
			'zh-tw': "極巨電拳",
			'ja-jp': "ダイフィスト"
		},

		effect: {
			'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。",
			'ja-jp': "このポケモンについているエネルギーを2個選び、トラッシュする。"
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