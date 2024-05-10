import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ユキカブリ",
		'zh-tw': "雪笠怪",
		id: "Snover"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	dexId: [459],
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "寒い 季節は 山の ふもとまで 降りてくるが 春に なると 雪が 残る 山頂に 戻っていく。",
		'zh-tw': "在寒冷的季節裡會移動到山腳下，一到春天就會 返回積雪尚存的山頂。",
		id: "Snover turun ke kaki gunung di musim dingin, namun ia kembali ke puncak yang tertutup salju ketika musim semi."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			ja: "どつく",
			'zh-tw': "推擊",
			id: "Menohok"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card