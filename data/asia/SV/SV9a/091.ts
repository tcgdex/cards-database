import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "シロナのガブリアスex",
		'zh-tw': "<竹蘭的>烈咬陸鯊ex",
		'zh-cn': "<竹蘭的>烈咬陸鯊ex"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 330,
	types: ["Fighting"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "スクリューダイブ",
			'zh-tw': "螺旋俯衝",
			'zh-cn': "螺旋俯衝"
		},

		damage: 100,

		effect: {
			ja: "のぞむなら、自分の手札が6枚になるように、山札を引く。",
			'zh-tw': "若希望，從牌庫抽卡直到自己的手牌滿6張為止。",
			'zh-cn': "若希望，從牌庫抽卡直到自己的手牌滿6張為止。"
		}
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "リューノバスター",
			'zh-tw': "龍之爆發",
			'zh-cn': "龍之爆發"
		},

		damage: 260,

		effect: {
			ja: "このポケモンについているエネルギーを、すべてトラッシュする。",
			'zh-tw': "將這隻寶可夢身上附加的能量卡全部丟棄。",
			'zh-cn': "將這隻寶可夢身上附加的能量卡全部丟棄。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "I"
}

export default card