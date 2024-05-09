import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "オニゴーリ"
	},

	category: "Pokemon",
	rarity: "Uncommon",
	illustrator: "Oku",
	dexId: [362],
	hp: 120,
	types: ["Water"],

	description: {
		ja: "空気中の 水分を 一瞬で 凍らせることで 獲物が 逃げられないように する。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "ダメージビート"
		},

		damage: "20×",

		effect: {
			ja: "相手のバトルポケモンにのっているダメカンの数×20ダメージ。"
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "クレイジーヘッズ"
		},

		damage: 140,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2
}

export default card
