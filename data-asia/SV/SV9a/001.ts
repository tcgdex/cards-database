import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒビキのカイロス",
		'zh-tw': "<阿響的>凱羅斯",
		'zh-cn': "<阿響的>凱羅斯"
	},

	illustrator: "GIDORA",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [127],
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "ツノで 獲物を 挟みこみ そのまま まっぷたつに するか 強引に 投げ飛ばしてしまう。",
		'zh-tw': "會用角緊緊夾住獵物， 就這樣把對方剪成兩半 或是把牠硬扔到天邊去。",
		'zh-cn': "會用角緊緊夾住獵物， 就這樣把對方剪成兩半 或是把牠硬扔到天邊去。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "はさむ",
			'zh-tw': "夾住",
			'zh-cn': "夾住"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "いっぽんがえし",
			'zh-tw': "一力反攻",
			'zh-cn': "一力反攻"
		},

		damage: "70+",

		effect: {
			ja: "前の相手の番に、ワザのダメージで、自分の「ヒビキのポケモン」がきぜつしていたなら、100ダメージ追加。",
			'zh-tw': "在上個對手的回合，若自己的「阿響的寶可夢」因招式的傷害而【昏厥】了，則增加100點傷害。",
			'zh-cn': "在上個對手的回合，若自己的「阿響的寶可夢」因招式的傷害而【昏厥】了，則增加100點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card