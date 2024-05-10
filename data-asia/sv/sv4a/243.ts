import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "パチリス",
		'zh-tw': "帕奇利茲"
	},

	illustrator: "saino misaki",
	category: "Pokemon",
	dexId: [417],
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "溜まった 電気を 分け与えようと 頬袋を こすり合わせる パチリスを 見かけることも ある。",
		'zh-tw': "有時候可以見到為了將儲存的電力分給同伴 而互相摩擦頰囊的帕奇利茲。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "でんきぶくろ",
			'zh-tw': "電氣袋"
		},

		effect: {
			ja: "このポケモンはマヒにならない。",
			'zh-tw': "這隻寶可夢不會【麻痺】。"
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			ja: "みんなでほうでん",
			'zh-tw': "一同放電"
		},

		damage: "10+",

		effect: {
			ja: "自分のベンチのポケモンの数×20ダメージ追加。このワザのダメージは弱点を計算しない。",
			'zh-tw': "增加自己的備戰區的【雷】寶可夢的數量×20點傷害。這個招式的傷害不計算弱點。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card