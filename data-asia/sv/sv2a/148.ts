import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ハクリュー"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [148],
	hp: 100,
	types: ["Dragon"],

	description: {
		ja: "全身から オーラが 出されると あたりの 天候が みるみるうちに 変わっていく という。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "たたく"
		},

		damage: 20
	}, {
		cost: ["Water", "Lightning"],

		name: {
			ja: "アクアスラッシュ"
		},

		damage: 90,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。"
		}
	}],

	retreat: 2
}

export default card