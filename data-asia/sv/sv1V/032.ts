import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ストリンダー"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [849],
	hp: 130,
	types: ["Lightning"],

	description: {
		ja: "荒々しく 胸もとの 突起を かき鳴らして 放つ 電撃は １５０００ボルトを 軽く 超える。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "むしりとる"
		},

		effect: {
			ja: "相手の手札からオモテを見ないで2枚選び、そのカードのオモテを見て、相手の山札にもどして切る。"
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			ja: "かみなり"
		},

		damage: 120,

		effect: {
			ja: "このポケモンにも20ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card