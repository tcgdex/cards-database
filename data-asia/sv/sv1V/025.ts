import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ハルクジラ"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [975],
	hp: 180,
	types: ["Water"],

	description: {
		ja: "氷エネルギーの 集中する 上あごの ツノが 超低温になって 周囲を 凍らせる。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ぶちかます"
		},

		damage: 50
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "スイーピングタックル"
		},

		damage: "200－",

		effect: {
			ja: "このポケモンにのっているダメカンの数×20ダメージぶん、このワザのダメージは小さくなる。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3
}

export default card