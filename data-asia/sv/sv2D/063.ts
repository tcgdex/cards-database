import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "ワッカネズミ",
		'zh-tw': "一對鼠"
	},

	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",
	dexId: [924],
	hp: 40,
	types: ["Colorless"],

	description: {
		ja: "息の合った コンビネーションで 巣の 材料に なりそうなものを 前歯で 切り出して 運び去る。",
		'zh-tw': "會以絕佳的團隊合作，把能當成巢穴建材的東西 用門牙切斷後搬走。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "くっつく",
			'zh-tw': "附著"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "けとばす",
			'zh-tw': "踢飛"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card