import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "パフュートン"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	dexId: [916],
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "花のような 香りを 振りまく。 筋肉が 発達した 脚は 軽く ５メートルを 飛び越える。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "えりすぐり"
		},

		effect: {
			ja: "コインを3回投げ、オモテの数ぶんまで、自分のトラッシュから好きなカードを選び、相手に見せて、手札に加える。"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "パフュームプレス"
		},

		damage: 70,

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card