import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "パッチール"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	dexId: [327],
	hp: 80,
	types: ["Colorless"],

	description: {
		ja: "１匹ずつ ブチ模様は 異なる。 フラフラした 動きで 相手の 攻撃を 絶妙に かわすぞ。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ちどりあし"
		},

		effect: {
			ja: "このポケモンがこんらんなら、このポケモンがワザのダメージを受けるとき、自分はコインを1回投げる。オモテなら、このポケモンはそのダメージを受けない。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "フラフラステップ"
		},

		damage: 100,

		effect: {
			ja: "このポケモンをこんらんにする。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card