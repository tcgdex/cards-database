import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {
		ja: "レントラーex",
		'zh-tw': "倫琴貓ex"
	},

	category: "Pokemon",
	rarity: "Double rare",
	illustrator: "PLANETA Yamashita",
	hp: 310,
	types: ["Lightning"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "つきさすがんこう",
			'zh-tw': "突刺目光"
		},

		damage: 120,

		effect: {
			ja: "相手の手札を見て、その中からカードを1枚選び、トラッシュする。",
			'zh-tw': "查看對手的手牌，從其中選擇1張卡，將其丟棄。"
		}
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			ja: "ボルトストライク",
			'zh-tw': "伏特強襲"
		},

		damage: 250,

		effect: {
			ja: "このポケモンについているエネルギーを、すべてトラッシュする。",
			'zh-tw': "將這隻寶可夢身上附加的能量卡全部丟棄。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card