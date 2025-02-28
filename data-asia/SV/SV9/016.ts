import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "Nのヒヒダルマ",
		'zh-tw': "N的達摩狒狒",
		'zh-cn': "N的達摩狒狒"
	},

	illustrator: "nagimiso",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [555],
	hp: 140,
	types: ["Fire"],

	description: {
		ja: "体内の 炎が 燃え盛るほど パワーが 高まる。 その 温度は １４００度を 超える ことも。",
		'zh-tw': "體內的火焰燃得越旺， 力量就越大。火焰的溫度 有時甚至能超過１４００度。",
		'zh-cn': "體內的火焰燃得越旺， 力量就越大。火焰的溫度 有時甚至能超過１４００度。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "バックドラフト",
			'zh-tw': "復燃",
			'zh-cn': "復燃"
		},

		damage: "30×",

		effect: {
			ja: "相手のトラッシュにある基本エネルギーの枚数×30ダメージ。",
			'zh-tw': "造成對手的棄牌區的基本能量卡的張數×30點傷害。",
			'zh-cn': "造成對手的棄牌區的基本能量卡的張數×30點傷害。"
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "ひだるまキャノン",
			'zh-tw': "火人加農炮",
			'zh-cn': "火人加農炮"
		},

		damage: 90,

		effect: {
			ja: "このポケモンについているエネルギーをすべてトラッシュし、相手のベンチポケモン1匹にも、90ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "將這隻寶可夢身上附加的能量卡全部丟棄，對手的1隻備戰寶可夢也受到90點傷害。[在備戰區不計算弱點・抵抗力。]",
			'zh-cn': "將這隻寶可夢身上附加的能量卡全部丟棄，對手的1隻備戰寶可夢也受到90點傷害。[在備戰區不計算弱點・抵抗力。]"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card