import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "バッフロン"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Common",
	category: "Pokemon",
	dexId: [626],
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "頭突きだけで 車を 潰す。 頭の 毛が 大きいほど 群れでの 地位が 上がるのだ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "まちうけホーン"
		},

		damage: 40,

		effect: {
			ja: "次の相手の番、このポケモンがワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを6個のせる。"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "スマッシュヘッド"
		},

		damage: 150,

		effect: {
			ja: "このポケモンについているエネルギーを2個選び、トラッシュする。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card