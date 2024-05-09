import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒンバス"
	},

	illustrator: "Tetsu Kayama",
	rarity: "Common",
	category: "Pokemon",
	dexId: [349],
	hp: 30,
	types: ["Water"],

	description: {
		ja: "みすぼらしく 醜い ポケモンだが しぶとい 生命力を もち わずかな 水だけでも 生き延びる。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "ドローアップ"
		},

		effect: {
			ja: "自分の山札からエネルギーを1枚選び、相手に見せて、手札に加える。そして山札を切る。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card