import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "フローゼル",
		'zh-tw': "浮潛鼬"
	},

	illustrator: "Gemi",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [419],
	hp: 120,
	types: ["Water"],

	description: {
		ja: "浮き袋を ふくらませると 人を 背中に 乗せることが できる。 浮き袋を しぼませて 潜る。",
		'zh-tw': "膨脹起浮囊後就能讓人坐在自己背上。 排出浮囊的氣來潛水。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ハイドロポンプ",
			'zh-tw': "水炮"
		},

		damage: "50+",

		effect: {
			ja: "このポケモンについているエネルギーの数×20ダメージ追加。",
			'zh-tw': "增加這隻寶可夢身上附加的【水】能量的數量×20點傷害。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card