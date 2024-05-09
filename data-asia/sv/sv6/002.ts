import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "キマワリ"
	},

	category: "Pokemon",
	rarity: "Uncommon",
	illustrator: "Ounishi",
	dexId: [192],
	hp: 100,
	types: ["Grass"],

	description: {
		ja: "浴びた 日差しを エネルギーに 変換するため 昼間は ずっと 太陽の方を 向いている。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "ひざしがえし"
		},

		damage: "60×",

		effect: {
			ja: "相手のポケモン全員についているエネルギーの数×60ダメージ。"
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			ja: "メガドレイン"
		},

		damage: 50,

		effect: {
			ja: "このポケモンのHPを「30」回復する。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card
