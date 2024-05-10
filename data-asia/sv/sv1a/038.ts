import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "デデンネex",
		'zh-tw': "咚咚鼠ex"
	},

	illustrator: "aky CG Works",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 170,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Psychic", "Psychic"],

		name: {
			ja: "テールスワップ",
			'zh-tw': "長尾置換"
		},

		effect: {
			ja: "自分のベンチポケモンを1匹選び、選んだポケモンにのっているダメカンをすべて、相手のバトルポケモンにのせ替える。",
			'zh-tw': "選擇1隻自己的備戰寶可夢，將所選的寶可夢身上放置的傷害指示物，全部改放於對手的戰鬥寶可夢身上。"
		}
	}, {
		cost: ["Psychic", "Psychic", "Psychic"],

		name: {
			ja: "ワンダーショット",
			'zh-tw': "奇跡射擊"
		},

		damage: 170,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card