import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ハルクジラ",
		'zh-tw': "浩大鯨"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [975],
	hp: 180,
	types: ["Water"],

	description: {
		ja: "氷エネルギーの 集中する 上あごの ツノが 超低温になって 周囲を 凍らせる。",
		'zh-tw': "會集中冰能量使上顎的角變得超低溫，然後將自己 附近的一切都凍成冰塊。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ぶちかます",
			'zh-tw': "頭突"
		},

		damage: 50
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "スイーピングタックル",
			'zh-tw': "刷冰衝撞"
		},

		damage: "200-",

		effect: {
			ja: "このポケモンにのっているダメカンの数×20ダメージぶん、このワザのダメージは小さくなる。",
			'zh-tw': "減少這隻寶可夢身上放置的傷害指示物的數量×20點傷害。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card