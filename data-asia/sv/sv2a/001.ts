import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "フシギダネ",
		'zh-tw': "妙蛙種子"
	},

	illustrator: "Yuu Nishida",
	rarity: "Common",
	category: "Pokemon",
	dexId: [1],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "生まれて しばらくの あいだ 背中の タネに つまった 栄養を とって 育つ。",
		'zh-tw': "在出生後的一段時間內，牠會吸收背上種子裡 儲存著的營養成長。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			ja: "やどりぎのタネ",
			'zh-tw': "寄生種子"
		},

		damage: 20,

		effect: {
			ja: "このポケモンのHPを「20」回復する。",
			'zh-tw': "將這隻寶可夢恢復「20」HP。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card