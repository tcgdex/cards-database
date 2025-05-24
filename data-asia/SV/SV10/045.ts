import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "猴怪",
		'zh-cn': "猴怪",
		ja: "マンキー"
	},

	illustrator: "Ayako Ozaki",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'zh-tw': "在樹上群居的寶可夢。 和夥伴走散的猴怪會因為 按捺不住寂寞而動不動就生氣。",
		'zh-cn': "在樹上群居的寶可夢。 和夥伴走散的猴怪會因為 按捺不住寂寞而動不動就生氣。",
		ja: "木の上で 群れをつくって 暮らす。 群れから はぐれた マンキーは 寂しくて すぐに 怒りだす。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "踹",
			'zh-cn': "踹",
			ja: "けりつける"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
			'zh-cn': "擲1次硬幣若為反面，則這個招式失敗。",
			ja: "コインを1回投げウラなら、このワザは失敗。"
		},

		damage: 30,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [56]
}

export default card