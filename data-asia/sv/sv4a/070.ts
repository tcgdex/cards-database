import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "タイカイデン",
		'zh-tw': "大電海燕"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	dexId: [941],
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "のど袋を ふくらませて 電気を 増幅させる。 風に 乗って １日で ７００キロを 飛行する。",
		'zh-tw': "會膨脹喉囊來增強電力。可以乘著風在１天內 就飛上７００公里。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "だんけつサンダー",
			'zh-tw': "團結閃電"
		},

		effect: {
			ja: "相手のベンチポケモン1匹に、自分のトラッシュにある、ワザ「だんけつのつばさ」を持つポケモンの枚数×10ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的1隻備戰寶可夢受到自己的棄牌區的，持有「團結之翼」招式的寶可夢卡的張數×10點傷害。[在備戰區不計算弱點・抵抗力。]"
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			ja: "スピードウイング",
			'zh-tw': "高速之翼"
		},

		damage: 90
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card