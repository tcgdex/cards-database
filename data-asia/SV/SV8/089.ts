import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "エレザード"
	},

	illustrator: "Ryota Murayama",
	rarity: "Common",
	category: "Pokemon",
	dexId: [695],
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "襟巻を 広げて 太陽光を 浴びると 大都会で 使われる 電気を １匹で 発電する。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "パラボラチャージ"
		},

		effect: {
			ja: "自分の山札からエネルギーを4枚まで選び、相手に見せて、手札に加える。そして山札を切る。"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "エレキスラッグ"
		},

		damage: 80
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card