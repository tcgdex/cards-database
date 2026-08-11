import { Card } from "models/database/card"
import Set from "../SK"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雪童子",
		'ja-jp': "ユキワラシ"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'zh-tw': "只能在寒冷的土地上生存。即使在零下１００度的環境下也能充滿活力地到處蹦蹦跳跳。",
		'ja-jp': "寒い 土地でしか 生きられない。 マイナス １００度の 環境でも 元気に 跳ねまわっているよ。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "頭錘",
			'ja-jp': "ずつき"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",
	dexId: [361]
}

export default card