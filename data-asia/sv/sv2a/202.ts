import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "カメックスex",
		'zh-tw': "水箭龜ex"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 330,
	types: ["Water"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "かたいこうら",
			'zh-tw': "堅硬甲殼"
		},

		effect: {
			ja: "このポケモンが受けるワザのダメージは「-30」される。",
			'zh-tw': "這隻寶可夢受到招式的傷害「-30」點。"
		}
	}],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			ja: "ツインカノン",
			'zh-tw': "雙加農炮"
		},

		damage: "140×",

		effect: {
			ja: "自分の手札から「基本エネルギー」を2枚までトラッシュし、その枚数×140ダメージ。",
			'zh-tw': "從自己的手牌將最多2張「基本【水】能量」卡丟棄，造成其張數×140點傷害。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card