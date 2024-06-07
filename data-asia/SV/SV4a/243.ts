import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "パチリス",
		'zh-tw': "帕奇利茲",
		id: "Pachirisu"
	},

	illustrator: "saino misaki",
	category: "Pokemon",
	dexId: [417],
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "溜まった 電気を 分け与えようと 頬袋を こすり合わせる パチリスを 見かけることも ある。",
		'zh-tw': "有時候可以見到為了將儲存的電力分給同伴 而互相摩擦頰囊的帕奇利茲。",
		id: "Kadang terlihat Pachirisu yang saling menggosokkan kantong pipinya untuk membagikan listrik yang telah tertimbun."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "でんきぶくろ",
			'zh-tw': "電氣袋",
			id: "Kantong Listrik"
		},

		effect: {
			ja: "このポケモンはマヒにならない。",
			'zh-tw': "這隻寶可夢不會【麻痺】。",
			id: "Pokémon ini tidak akan menjadi Lumpuh."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			ja: "みんなでほうでん",
			'zh-tw': "一同放電",
			id: "Pelepasan Listrik Bersama"
		},

		damage: "10+",

		effect: {
			ja: "自分のベンチのポケモンの数×20ダメージ追加。このワザのダメージは弱点を計算しない。",
			'zh-tw': "增加自己的備戰區的【雷】寶可夢的數量×20點傷害。這個招式的傷害不計算弱點。",
			id: "Kerusakan yang diberikan bertambah sejumlah 20 untuk tiap Pokémon {Listrik} di Cadangan sendiri. Kerusakan akibat serangan ini tidak terpengaruh oleh Kelemahan."
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