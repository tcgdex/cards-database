import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "アリアドス",
		'zh-tw': "阿利多斯"
	},

	illustrator: "Shinji Kanda",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [168],
	hp: 90,
	types: ["Darkness"],

	evolveFrom: {
		ja: "イトマル"
	},

	description: {
		ja: "糸を はいて 獲物を 捕らえる。 夜に なると 巣から 離れて 積極的に 狩りを するぞ。",
		'zh-tw': "會吐絲來捕捉獵物。 每到夜晚就會離開巢穴， 積極地展開狩獵。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "いとがらめ",
			'zh-tw': "線帶纏繞"
		},

		effect: {
			ja: "相手のバトルポケモンのにげるためのエネルギーの数×30ダメージ追加。",
			'zh-tw': "增加對手的戰鬥寶可夢【撤退】所需的能量的數量×30點傷害。"
		},

		damage: "10+",
		cost: ["Darkness"]
	}, {
		name: {
			ja: "どくのキバ",
			'zh-tw': "毒牙"
		},

		effect: {
			ja: "相手のバトルポケモンをどくにする。",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。"
		},

		damage: 80,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651008,
				tcgplayer: 569795,
				cardtrader: 234106,
			},
		},
	]
}

export default card