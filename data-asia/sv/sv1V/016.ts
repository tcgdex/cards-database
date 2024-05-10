import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ウインディex",
		'zh-tw': "風速狗ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 280,
	types: ["Fire"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			ja: "いかりのツメ",
			'zh-tw': "憤怒之爪"
		},

		damage: "30+",

		effect: {
			ja: "このポケモンにのっているダメカンの数×10ダメージ追加。",
			'zh-tw': "增加這隻寶可夢身上放置的傷害指示物的數量×10點傷害。"
		}
	}, {
		cost: ["Fire", "Fire", "Fire"],

		name: {
			ja: "ぐれんのほのお",
			'zh-tw': "紅蓮火焰"
		},

		damage: 250,

		effect: {
			ja: "このポケモンについているエネルギーを2個選び、トラッシュする。",
			'zh-tw': "選擇2個這隻寶可夢身上附加的【火】能量，將其丟棄。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card