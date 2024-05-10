import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "マンキー",
		'zh-tw': "猴怪"
	},

	illustrator: "kurumitsu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [56],
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "木の上で 群れをつくって 暮らす。 群れから はぐれた マンキーは 寂しくて すぐに 怒りだす。",
		'zh-tw': "在樹上群居的寶可夢。和夥伴走散的猴怪會因為 按捺不住寂寞而動不動就生氣。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "けたぐり",
			'zh-tw': "踢倒"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "ぶらさがる",
			'zh-tw': "垂吊"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card