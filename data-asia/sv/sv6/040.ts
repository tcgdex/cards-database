import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "ルクシオ"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Takumi Wada",
	dexId: [404],
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "仲間と 尻尾を つなげると より 強力な 電撃を ツメから 出すことが できる。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			ja: "かじりつく"
		},

		damage: 60,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card
