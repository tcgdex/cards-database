import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "タッツー",
		'zh-tw': "墨海馬"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	dexId: [116],
	hp: 60,
	types: ["Water"],

	description: {
		ja: "水中を 踊るように 泳いで 渦を つくる。 仲間と 渦の 大きさを 競って 遊ぶ。",
		'zh-tw': "會在水中跳舞似地游動來製造漩渦。玩耍時會和夥伴 比賽誰做出的漩渦比較大。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "ひっかける",
			'zh-tw': "鉤住"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card