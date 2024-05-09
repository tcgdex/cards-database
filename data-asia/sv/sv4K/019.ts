import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "キングドラ"
	},

	illustrator: "Tonji Matsuno",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [230],
	hp: 150,
	types: ["Water"],

	description: {
		ja: "剥がれた ウロコは 王族へ 献上されるほど 上質で 深みのある 輝きを もつ。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "ワールタイド"
		},

		effect: {
			ja: "自分の山札を上から6枚オモテにして、その中にあるエネルギーの枚数×60ダメージを、相手のポケモン1匹に与える。オモテにしたエネルギーはトラッシュし、残りのカードは山札にもどして切る。［ベンチは弱点・抵抗力を計算しない。］"
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			ja: "ハイドロスプラッシュ"
		},

		damage: 120
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card