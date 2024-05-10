import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {
		ja: "ルクシオ",
		'zh-tw': "勒克貓"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Takumi Wada",
	dexId: [404],
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "仲間と 尻尾を つなげると より 強力な 電撃を ツメから 出すことが できる。",
		'zh-tw': "只要與夥伴的尾巴互相 串聯，就能將更加強大 的電擊從爪子釋放出去。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			ja: "かじりつく",
			'zh-tw': "咬緊"
		},

		damage: 60,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card