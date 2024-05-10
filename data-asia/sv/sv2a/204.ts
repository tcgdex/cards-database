import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "サンダーex",
		'zh-tw': "閃電鳥ex"
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ボルトフロート",
			'zh-tw': "伏特浮游"
		},

		effect: {
			ja: "このポケモンにエネルギーがついているなら、このポケモンのにげるためのエネルギーは、すべてなくなる。",
			'zh-tw': "若這隻寶可夢身上附有【雷】能量卡，則這隻寶可夢【撤退】所需的能量全部消除。"
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Lightning"],

		name: {
			ja: "いなずまれんだん",
			'zh-tw': "閃電連彈"
		},

		damage: 120,

		effect: {
			ja: "ダメカンがのっている相手のベンチポケモン1匹にも、90ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的身上放置有傷害指示物的1隻備戰寶可夢也受到90點傷害。[在備戰區不計算弱點・抵抗力。]"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card