import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "ポポッコ",
		'zh-tw': "毽子花"
	},

	illustrator: "Yoriyuki Ikegami",
	rarity: "Common",
	category: "Pokemon",
	dexId: [188],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "ポポッコの マニアは 頭の 花から 漂う 香りで どこで 生まれたか わかるらしい。",
		'zh-tw': "據說熱愛毽子花的人能夠透過牠頭上的花散發的香味， 猜出牠是在哪裡出生的。"
	},

	stage: "Stage1",

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
			ja: "はなのかぜ",
			'zh-tw': "花之風"
		},

		damage: 30,

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