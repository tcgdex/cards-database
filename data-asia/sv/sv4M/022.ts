import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "エレキッド"
	},

	illustrator: "aoki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [239],
	hp: 30,
	types: ["Lightning"],

	description: {
		ja: "まだ 電気を 溜めるのが 下手。 電気を 食べるために 民家に 忍びこみ コンセントを 探す。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Void"],

		name: {
			ja: "バリバリショット"
		},

		effect: {
			ja: "相手のポケモン1匹に、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0
}

export default card