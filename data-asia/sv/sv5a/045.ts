import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "ゲッコウガex",
		'zh-tw': "甲賀忍蛙ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 310,
	types: ["Fighting"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "しのびのやいば",
			'zh-tw': "忍之利刃"
		},

		damage: 170,

		effect: {
			ja: "のぞむなら、自分の山札から好きなカードを1枚選び、手札に加える。そして山札を切る。",
			'zh-tw': "若希望，從自己的牌庫任意選擇1張卡加入手牌。並且重洗牌庫。"
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "ぶんしんれんだ",
			'zh-tw': "分身連打"
		},

		effect: {
			ja: "このポケモンについているエネルギーを2個トラッシュし、相手のポケモン2匹に、それぞれ120ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "將2個這隻寶可夢身上附加的能量丟棄，對手的2隻寶可夢各受到120點傷害。[在備戰區不計算弱點・抵抗力。]"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card