import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "モスノウ"
	},

	illustrator: "rika",
	rarity: "Common",
	category: "Pokemon",
	dexId: [873],
	hp: 110,
	types: ["Water"],

	description: {
		ja: "触角で 大気の 流れを 察知する。 りんぷんに 冷気を 織り交ぜ 雪のように 降らせる。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			ja: "いてつくれいき"
		},

		damage: 100,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、ワザが使えない。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2
}

export default card