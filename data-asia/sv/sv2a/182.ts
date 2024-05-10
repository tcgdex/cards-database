import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ハクリュー",
		'zh-tw': "哈克龍"
	},

	illustrator: "rika",
	category: "Pokemon",
	dexId: [148],
	hp: 100,
	types: ["Dragon"],

	description: {
		ja: "全身から オーラが 出されると あたりの 天候が みるみるうちに 変わっていく という。",
		'zh-tw': "據說牠全身上下散發出氣場時，周圍的天氣就會在轉眼間為之一變。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "たたく",
			'zh-tw': "敲擊"
		},

		damage: 20
	}, {
		cost: ["Water", "Lightning"],

		name: {
			ja: "アクアスラッシュ",
			'zh-tw': "水流斬"
		},

		damage: 90,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		}
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card