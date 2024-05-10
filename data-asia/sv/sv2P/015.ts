import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "チオンジェンex",
		'zh-tw': "古簡蝸ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 230,
	types: ["Grass"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			ja: "むさぼるつた",
			'zh-tw': "追擊蔦"
		},

		effect: {
			ja: "相手のベンチポケモン1匹に、相手がすでにとったサイドの枚数×60ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的1隻備戰寶可夢受到對手已經獲得的獎賞卡的張數×60點傷害。[在備戰區不計算弱點・抵抗力。]"
		}
	}, {
		cost: ["Grass", "Grass", "Grass", "Colorless"],

		name: {
			ja: "フォレストバーン",
			'zh-tw': "森林灼燒"
		},

		damage: 220
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card