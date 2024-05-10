import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ナカヌチャン",
		'zh-tw': "巧鍛匠"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	dexId: [958],
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "大きくて 頑丈な ハンマーを 作るために キリキザンの 群れを 襲って 金属を 集める。",
		'zh-tw': "為了製作又大又堅固的錘子，會去襲擊劈斬司令 的群體，藉以收集金屬。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "なぐる",
			'zh-tw': "打擊"
		},

		damage: 30
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "そこぢから",
			'zh-tw': "潛力"
		},

		damage: 80,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card