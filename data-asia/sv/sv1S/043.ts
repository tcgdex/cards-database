import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ワルビル",
		'zh-tw': "混混鱷"
	},

	illustrator: "kantaro",
	rarity: "Common",
	category: "Pokemon",
	dexId: [552],
	hp: 100,
	types: ["Fighting"],

	description: {
		ja: "薄い 膜で 被われている 両目は 真夜中でも 見える。 数匹の 群れで 暮らしている。",
		'zh-tw': "由於雙眼覆蓋著薄膜，在半夜中也能看見四周。 會和多隻同類組成群體生活。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "しっぺがえし",
			'zh-tw': "以牙還牙"
		},

		damage: "30+",

		effect: {
			ja: "相手のサイドの残り枚数が1枚なら、90ダメージ追加。",
			'zh-tw': "若對手剩餘獎賞卡的張數為1張，則增加90點傷害。"
		}
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "どつく",
			'zh-tw': "推擊"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card