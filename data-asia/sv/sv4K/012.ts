import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "バクーダ",
		'zh-tw': "噴火駝"
	},

	illustrator: "satoma",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [323],
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "火山の 火口で 生活する。 １０年ごとに 背中の コブが 大噴火することで 有名だ。",
		'zh-tw': "平時生活在火山口。以背上的駝峰每１０年 會大爆發一次而聞名。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "ほのおでこがす",
			'zh-tw': "火焰灼燒"
		},

		effect: {
			ja: "相手のバトルポケモンをやけどにする。",
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。"
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "ふんせきキャノン",
			'zh-tw': "火山岩加農炮"
		},

		damage: "120+",

		effect: {
			ja: "のぞむなら、このポケモンについているエネルギーを1個選び、トラッシュする。その場合、120ダメージ追加。",
			'zh-tw': "若希望，選擇1個這隻寶可夢身上附加的【鬥】能量，將其丟棄。這個情況下，增加120點傷害。"
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