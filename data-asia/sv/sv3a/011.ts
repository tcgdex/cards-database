import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヘイラッシャ"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [977],
	hp: 160,
	types: ["Water"],

	description: {
		ja: "大食らいだが エサを 取るのは 苦手。 シャリタツと コンビを 組んで 獲物を 捕らえるのだ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "まるのみほきゅう"
		},

		effect: {
			ja: "自分の山札を上から5枚見て、その中から基本エネルギーを好きなだけ選び、このポケモンにつける。残りのカードは山札にもどして切る。"
		}
	}, {
		cost: ["Water", "Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ハイドロスプラッシュ"
		},

		damage: 180
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 4
}

export default card