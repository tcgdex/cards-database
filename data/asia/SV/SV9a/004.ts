import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "シロナのロゼリア",
		'zh-tw': "<竹蘭的>毒薔薇",
		'zh-cn': "<竹蘭的>毒薔薇"
	},

	illustrator: "nisimono",
	rarity: "Common",
	category: "Pokemon",
	dexId: [315],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "右手と 左手で ２種類の 毒を 使いわけて 攻撃する。 香りが 強いほど 元気だ。",
		'zh-tw': "會用右手和左手分別施放 ２種不同的毒來進行攻擊。 香氣越濃越有活力。",
		'zh-cn': "會用右手和左手分別施放 ２種不同的毒來進行攻擊。 香氣越濃越有活力。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "トゲでさす",
			'zh-tw': "針刺",
			'zh-cn': "針刺"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card