import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒビキのピチュー",
		'zh-tw': "<阿響的>皮丘",
		'zh-cn': "<阿響的>皮丘"
	},

	illustrator: "Narumi Sato",
	rarity: "Common",
	category: "Pokemon",
	dexId: [172],
	hp: 30,
	types: ["Lightning"],

	description: {
		ja: "電気を 溜めこむのが 下手。 なんらかの ショックを 受けると すぐに 放電 してしまう。",
		'zh-tw': "很不擅長蓄電。 只要受到什麼驚嚇， 就會馬上開始放電。",
		'zh-cn': "很不擅長蓄電。 只要受到什麼驚嚇， 就會馬上開始放電。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "ビリリドロー",
			'zh-tw': "麻麻抽出",
			'zh-cn': "麻麻抽出"
		},

		damage: 30,

		effect: {
			ja: "自分の山札を1枚引く。",
			'zh-tw': "從自己的牌庫抽出1張卡。",
			'zh-cn': "從自己的牌庫抽出1張卡。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "I"
}

export default card