import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "エレキブルex",
		'zh-tw': "電擊魔獸ex",
		'zh-cn': "電擊魔獸ex"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 280,
	types: ["Lightning"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			ja: "デュアルボルト",
			'zh-tw': "二重伏特",
			'zh-cn': "二重伏特"
		},

		effect: {
			ja: "相手のポケモン2匹に、それぞれ50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的2隻寶可夢各受到50點傷害。[在備戰區不計算弱點・抵抗力。]",
			'zh-cn': "對手的2隻寶可夢各受到50點傷害。[在備戰區不計算弱點・抵抗力。]"
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			ja: "こうでんあつプレス",
			'zh-tw': "高電壓壓制",
			'zh-cn': "高電壓壓制"
		},

		damage: "180+",

		effect: {
			ja: "このワザを使うためのエネルギーより、2個多くエネルギーがついているなら、100ダメージ追加。",
			'zh-tw': "若身上附有的能量比使用這個招式所需的能量多2個，則增加100點傷害。",
			'zh-cn': "若身上附有的能量比使用這個招式所需的能量多2個，則增加100點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "I"
}

export default card