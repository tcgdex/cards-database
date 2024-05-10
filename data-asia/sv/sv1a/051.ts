import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "タイレーツ",
		'zh-tw': "列陣兵"
	},

	illustrator: "kurumitsu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [870],
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "先頭に 立って 指示を 出す ヘイチョーは ６匹の 中で いちばん 強くて 賢いのだ。",
		'zh-tw': "站在最前面下達指示的頭頭是６隻裡面 最強最聰明的。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ずつき",
			'zh-tw': "頭錘"
		},

		damage: 20
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "いっしょにとつげき",
			'zh-tw': "一起突擊"
		},

		damage: "70+",

		effect: {
			ja: "自分のベンチに「タイレーツ」がいるなら、90ダメージ追加。",
			'zh-tw': "若自己的備戰區有「列陣兵」，則增加90點傷害。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card