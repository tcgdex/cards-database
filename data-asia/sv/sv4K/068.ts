import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "ブビィ"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	dexId: [240],
	hp: 30,
	types: ["Fire"],

	description: {
		ja: "火山の まわりに 棲んでいる。 １日の 終わりには マグマに 浸かり 疲れを 癒している。"
	},

	stage: "Basic",

	attacks: [{


		name: {
			ja: "じりじりヒーター"
		},

		effect: {
			ja: "次の相手の番、このポケモンがワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを6個のせる。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 0
}

export default card
