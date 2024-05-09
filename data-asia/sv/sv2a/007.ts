import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ゼニガメ"
	},

	illustrator: "kantaro",
	rarity: "Common",
	category: "Pokemon",
	dexId: [7],
	hp: 60,
	types: ["Water"],

	description: {
		ja: "危なくなると 甲羅に 手足を 引っこめて 身を 守りながら 口から 水を 吹き出している。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "からにこもる"
		},

		effect: {
			ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージを受けない。"
		}
	}, {
		cost: ["Water", "Water"],

		name: {
			ja: "ロケットずつき"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card