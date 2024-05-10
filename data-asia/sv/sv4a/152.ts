import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ワッカネズミ",
		'zh-tw': "一對鼠"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	dexId: [924],
	hp: 30,
	types: ["Colorless"],

	description: {
		ja: "息の合った コンビネーションで 巣の 材料に なりそうなものを 前歯で 切り出して 運び去る。",
		'zh-tw': "會以絕佳的團隊合作，把能當成巢穴建材的東西 用門牙切斷後搬走。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "もってくる",
			'zh-tw': "呼喚"
		},

		effect: {
			ja: "自分の山札を2枚引く。",
			'zh-tw': "從自己的牌庫抽出2張卡。"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ひっぱたく",
			'zh-tw': "重摑"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card