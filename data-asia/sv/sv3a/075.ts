import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "ユキメノコex",
		'zh-tw': "雪妖女ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 250,
	types: ["Grass"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "きょうかすいげつ",
			'zh-tw': "鏡花水月"
		},

		effect: {
			ja: "このポケモンが、バトル場できぜつしたとき、自分はコインを1回投げる。オモテなら、とられるサイドは1枚少なくなる。",
			'zh-tw': "這隻寶可夢在戰鬥場【昏厥】時，自己擲1次硬幣。若為正面，則被獲得的獎賞卡減少1張。"
		}
	}],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			ja: "フロストバレット",
			'zh-tw': "冰霜子彈"
		},

		damage: 140,

		effect: {
			ja: "相手のベンチポケモン1匹にも、20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的1隻備戰寶可夢也受到20點傷害。[在備戰區不計算弱點・抵抗力。]"
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