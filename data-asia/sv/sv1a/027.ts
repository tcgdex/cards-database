import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "クワッス",
		'zh-tw': "潤水鴨"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	dexId: [912],
	hp: 60,
	types: ["Water"],

	description: {
		ja: "昔 遠い 土地から やって来て 棲みついた。 羽から 分泌する ジェルは 水と 汚れを 弾く。",
		'zh-tw': "很久以前從遠方來到了這裡棲息。羽毛分泌出的 凝膠有防水和防污的效果。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			ja: "ジェルかけ",
			'zh-tw': "潑膠"
		},

		damage: 20,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンがワザを使うとき、相手はコインを1回投げる。ウラならそのワザは失敗。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式時，對手擲1次硬幣。若為反面，則那個招式失敗。"
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