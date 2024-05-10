import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤングース",
		'zh-tw': "貓鼬少"
	},

	illustrator: "saino misaki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [734],
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "胴体の ほとんどが 胃袋。 毎日 同じ ルートを うろつき 新鮮な エサを 探してまわる。",
		'zh-tw': "整個身體幾乎都是胃。每天都徘徊在固定的路線上， 四處尋找新鮮的食物。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "はねとばす",
			'zh-tw': "擊飛"
		},

		damage: "10+",

		effect: {
			ja: "コインを1回投げオモテなら、10ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加10點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card