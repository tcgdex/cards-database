import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "摩托蜥ex",
		'zh-cn': "摩托蜥ex",
		ja: "モトトカゲex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'zh-tw': "突圍",
			'zh-cn': "突圍",
			ja: "ブレイクスルー"
		},

		effect: {
			'zh-tw': "對手的1隻備戰寶可夢也受到30點傷害。[在備戰區不計算弱點・抵抗力。]",
			'zh-cn': "對手的1隻備戰寶可夢也受到30點傷害。[在備戰區不計算弱點・抵抗力。]",
			ja: "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		},

		damage: 130,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "鋯石之路",
			'zh-cn': "鋯石之路",
			ja: "ジルコンロード"
		},

		effect: {
			'zh-tw': "若希望，從自己的牌庫抽出5張卡。",
			'zh-cn': "若希望，從自己的牌庫抽出5張卡。",
			ja: "のぞむなら、自分の山札を5枚引く。"
		},

		damage: 180,
		cost: ["Grass", "Fire", "Psychic"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Double rare"
}

export default card