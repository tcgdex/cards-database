import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "狗仔包",
		'zh-cn': "狗仔包",
		ja: "パピモッチ"
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'zh-tw': "吐出的氣息中含有酵母， 能在製作料理時派上用場， 因此自古以來就受到人們保護。",
		'zh-cn': "吐出的氣息中含有酵母， 能在製作料理時派上用場， 因此自古以來就受到人們保護。",
		ja: "吐息に 含まれている 酵母が 料理を 作るのに 役立つため 古くから 人に 保護されてきた。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "香味",
			'zh-cn': "香味",
			ja: "いいにおい"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
			'zh-cn': "從自己的牌庫選擇1張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
			ja: "自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "踩",
			'zh-cn': "踩",
			ja: "ふむ"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [926]
}

export default card