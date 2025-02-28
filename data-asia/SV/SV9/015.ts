import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "Nのダルマッカ",
		'zh-tw': "N的火紅不倒翁",
		'zh-cn': "N的火紅不倒翁"
	},

	illustrator: "Gemi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [554],
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "寝ているときは 押しても 引いても けっして 倒れない。 縁起ものの モチーフとして 人気が 高い。",
		'zh-tw': "在牠睡覺的時候， 無論是推是拉，牠都不會倒下。 因為象徵著吉利而大受歡迎。",
		'zh-cn': "在牠睡覺的時候， 無論是推是拉，牠都不會倒下。 因為象徵著吉利而大受歡迎。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ころがりタックル",
			'zh-tw': "滾動衝撞",
			'zh-cn': "滾動衝撞"
		},

		damage: 20
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "ほのお",
			'zh-tw': "火焰",
			'zh-cn': "火焰"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card