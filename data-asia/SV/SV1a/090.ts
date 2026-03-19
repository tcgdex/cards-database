import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ルガルガンex"
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 260,
	types: ["Fighting"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "いわおとし"
		},

		damage: 40
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "スケアリーファング"
		},

		damage: 140,

		effect: {
			ja: "次の相手の番、このポケモンがワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを10個のせる。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,

	thirdParty: {
		cardmarket: 701104
	}
}

export default card