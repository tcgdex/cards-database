import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ホップのザシアンex",
		'zh-tw': "赫普的蒼響ex",
		'zh-cn': "赫普的蒼響ex"
	},

	illustrator: "aky CG Works",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 230,
	types: ["Metal"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "せつなぎり",
			'zh-tw': "剎那斬",
			'zh-cn': "剎那斬"
		},

		damage: 30,

		effect: {
			ja: "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的1隻備戰寶可夢也受到30點傷害。[在備戰區不計算弱點・抵抗力。]",
			'zh-cn': "對手的1隻備戰寶可夢也受到30點傷害。[在備戰區不計算弱點・抵抗力。]"
		}
	}, {
		cost: ["Metal", "Metal", "Metal", "Colorless"],

		name: {
			ja: "ブレイブスラッシュ",
			'zh-tw': "無畏斬",
			'zh-cn': "無畏斬"
		},

		damage: 240,

		effect: {
			ja: "次の自分の番、このポケモンは「ブレイブスラッシュ」が使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「無畏斬」。",
			'zh-cn': "在下個自己的回合，這隻寶可夢無法使用「無畏斬」。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card