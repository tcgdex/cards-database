import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "クワッス",
		'zh-tw': "潤水鴨"
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	dexId: [912],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "昔 遠い 土地から やって来て 棲みついた。 羽から 分泌する ジェルは 水と 汚れを 弾く。",
		'zh-tw': "很久以前從遠方來到了這裡棲息。羽毛分泌出的 凝膠有防水和防污的效果。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "とつげき",
			'zh-tw': "突擊"
		},

		damage: 30,

		effect: {
			ja: "このポケモンにも10ダメージ。",
			'zh-tw': "這隻寶可夢也受到10點傷害。"
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