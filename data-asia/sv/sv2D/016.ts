import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "イーユイex",
		'zh-tw': "古玉魚ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 190,
	types: ["Fire"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "ねたみこがす",
			'zh-tw': "嫉妒灼燒"
		},

		effect: {
			ja: "相手の山札を上から2枚トラッシュする。",
			'zh-tw': "將對手的牌庫上方2張卡丟棄。"
		}
	}, {
		cost: ["Fire", "Fire"],

		name: {
			ja: "フレイムサージ",
			'zh-tw': "火焰巨浪"
		},

		damage: 100,

		effect: {
			ja: "自分のベンチポケモンを3匹まで選び、山札から「基本エネルギー」を1枚ずつつける。そして山札を切る。",
			'zh-tw': "選擇最多3隻自己的備戰寶可夢，從牌庫附給那些寶可夢各1張「基本【火】能量」卡。並且重洗牌庫。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card