import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴローニャex",
		'zh-tw': "隆隆岩ex"
	},

	illustrator: "PLANETA Igarashi",
	category: "Pokemon",
	hp: 330,
	types: ["Fighting"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "ダイナミックロール",
			'zh-tw': "極限轉動"
		},

		damage: 50,

		effect: {
			ja: "次の自分の番、このポケモンが使うワザの、相手のバトルポケモンへのダメージは「+120」される。",
			'zh-tw': "在下個自己的回合，這隻寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+120」點。"
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "がんせきボンバー",
			'zh-tw': "岩石衝撞"
		},

		damage: 180,

		effect: {
			ja: "このワザのダメージは抵抗力を計算しない。",
			'zh-tw': "這個招式的傷害不計算抵抗力。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card