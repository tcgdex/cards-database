import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "超夢VSTAR",
		ja: "ミュウツーVSTAR"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 280,
	types: ["Psychic"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "精神光芒",
			ja: "サイコパージ"
		},

		effect: {
			'zh-tw': "將自己的場上寶可夢身上附加的最多3張【超】能量卡丟棄，造成其張數×90點傷害。",
			ja: "自分の場のポケモンについているエネルギーを3枚までトラッシュし、その枚数×90ダメージ。"
		},

		damage: "90×",
		cost: ["Psychic", "Colorless"]
	}, {
		name: {
			'zh-tw': "[VSTAR力量]星星襲擊",
			ja: "スターレイド"
		},

		effect: {
			'zh-tw': "對手的所有「寶可夢【V】」各受到120點傷害。這個招式的傷害不計算弱點・抵抗力。[對戰中，己方只可使用1次【VSTAR】力量。]",
			ja: "相手の「ポケモンV」全員に、それぞれ120ダメージ。このワザのダメージは弱点・抵抗力を計算しない。［対戦中、自分はVSTARパワーを1回しか使えない。］"
		},

		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 2,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 687531
	}
}

export default card