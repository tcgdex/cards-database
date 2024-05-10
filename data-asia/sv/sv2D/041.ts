import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "ドクロッグ",
		'zh-tw': "毒骷蛙"
	},

	illustrator: "Yuya Oka",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [454],
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "柔らかい 体で 相手の 攻撃を かわしながら ふところに 飛び込み 毒の トゲを 突き刺す。",
		'zh-tw': "會一邊靠柔軟的身體閃避攻擊，一邊往對手的懷裡衝過去， 然後用帶毒的尖刺猛戳。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "つきさす",
			'zh-tw': "突刺"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "こぶしのトゲ",
			'zh-tw': "拳頭刺"
		},

		damage: 60,

		effect: {
			ja: "相手のバトルポケモンをどくにする。",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card