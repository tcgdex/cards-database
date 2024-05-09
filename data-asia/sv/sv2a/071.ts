import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ウツボット"
	},

	illustrator: "Jerky",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [71],
	hp: 150,
	types: ["Grass"],

	description: {
		ja: "体内に 取りこまれた ものは どんなに 硬くても 溶解液で 跡形なく 溶かされてしまう。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "はきだす"
		},

		damage: 50
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			ja: "ディレイドアシッド"
		},

		damage: 120,

		effect: {
			ja: "次の相手の番の終わりに、このワザを受けたポケモンにダメカンを12個のせる。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3
}

export default card