import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "寶石海星V",
		ja: "スターミーV"
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 190,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "高速星星",
			ja: "スピードスター"
		},

		effect: {
			'zh-tw': "這個招式的傷害不計算弱點・抵抗力、對手的戰鬥寶可夢身上的附加效果。",
			ja: "このワザのダメージは、弱点・抵抗力と、相手のバトルポケモンにかかっている効果を計算しない。"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "能量螺旋",
			ja: "エナジースパイラル"
		},

		effect: {
			'zh-tw': "造成對手的場上寶可夢身上附加的能量的數量×50點傷害。",
			ja: "相手の場のポケモンについているエネルギーの数×50ダメージ。"
		},

		damage: "50×",
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "F",
	rarity: "Double rare"
}

export default card