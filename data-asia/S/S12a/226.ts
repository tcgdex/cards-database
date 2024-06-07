import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "路卡利歐VSTAR",
		ja: "ルカリオVSTAR"
	},

	illustrator: "hncl",
	category: "Pokemon",
	hp: 270,
	types: ["Fighting"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "搏鬥肘擊",
			ja: "ファイティングナックル"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢為「寶可夢【V】」，則增加120點傷害。",
			ja: "相手のバトルポケモンが「ポケモンV」なら、120ダメージ追加。"
		},

		damage: "120＋",
		cost: ["Fighting", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "[VSTAR力量]波導星星",
			ja: "はどうスター"
		},

		effect: {
			'zh-tw': "造成對手的場上寶可夢身上附加的能量的數量×70點傷害。[對戰中，己方只可使用1次【VSTAR】力量。]",
			ja: "相手の場のポケモンについているエネルギーの数×70ダメージ。［対戦中、自分はVSTARパワーを1回しか使えない。］"
		},

		damage: "70×",
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card