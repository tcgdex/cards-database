import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ハヤシガメ"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	dexId: [388],
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "森の 中の 水辺で 暮らす。 昼間は 森の 外に 出て 甲羅の 木に 光を 当てる。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "いあいぎり"
		},

		damage: 20
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			ja: "こうらでぶつかる"
		},

		damage: 50,

		effect: {
			ja: "次の相手の番、このポケモンが受けるワザのダメージは「-20」される。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 4
}

export default card