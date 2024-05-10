import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ワタッコ",
		'zh-tw': "毽子棉"
	},

	illustrator: "Lee HyunJung",
	category: "Pokemon",
	dexId: [189],
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "季節風に 乗り 旅をする。 綿胞子が 尽きるとき 旅と ワタッコの 一生は 終わる。",
		'zh-tw': "會乘著季風到處旅行。當毽子棉的棉花孢子掉光時， 牠的旅行和生命也會隨之結束。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ふわっとよける",
			'zh-tw': "輕飄躲避"
		},

		effect: {
			ja: "このポケモンがワザのダメージを受けるとき、自分はコインを1回投げる。オモテなら、このポケモンはそのダメージを受けない。",
			'zh-tw': "這隻寶可夢受到招式的傷害時，自己擲1次硬幣。若為正面，則這隻寶可夢不會受到那個傷害。"
		}
	}],

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "わたげのかぜ",
			'zh-tw': "棉絮之風"
		},

		damage: 60,

		effect: {
			ja: "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的1隻備戰寶可夢也受到30點傷害。[在備戰區不計算弱點・抵抗力。]"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card