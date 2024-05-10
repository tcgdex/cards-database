import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "エイパム",
		'zh-tw': "長尾怪手"
	},

	illustrator: "aspara",
	rarity: "Common",
	category: "Pokemon",
	dexId: [190],
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "木の 上から 獲物が いないか 探す。 好物の アマカジを 見ると 興奮して 飛びかかるぞ。",
		'zh-tw': "會從樹上尋找獵物。只要發現自己愛吃的甜竹竹，就會興奮地飛撲過去。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "くすねる",
			'zh-tw': "偷盜"
		},

		effect: {
			ja: "自分の山札を1枚引く。",
			'zh-tw': "從自己的牌庫抽出1張。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ひらてうち",
			'zh-tw': "掌擊"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card