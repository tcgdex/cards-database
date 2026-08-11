import { Card } from "../../../interfaces"
import Set from "../SLL"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "列陣兵",
		ja: "タイレーツ"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		'zh-tw': "列陣兵由１個頭頭和５個跟班組成。頭頭的命令不可違抗。",
		ja: "ヘイチョーと 呼ばれる １匹と ヘイと 呼ばれる ５匹で ひとつ。 ヘイチョーの 命令は 絶対。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "鬥志頭錘",
			ja: "とうしのずつき"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢為「寶可夢【V】」，則增加50點傷害。這個招式的傷害不計算弱點。",
			ja: "相手のバトルポケモンが「ポケモンV」なら、50ダメージ追加。このワザのダメージは弱点を計算しない。"
		},

		damage: "10＋",
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "噴射頭擊",
			ja: "ジェットヘッド"
		},

		damage: 80,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	dexId: [870]
}

export default card