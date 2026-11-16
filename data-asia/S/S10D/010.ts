import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "マグマラシ",
		'zh-tw': "火岩鼠"
	},

	illustrator: "Pani Kobayashi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [156],
	hp: 90,
	types: ["Fire"],

	evolveFrom: {
		ja: "ヒノアラシ"
	},

	description: {
		ja: "絶対に 燃えることなき 摩訶不思議な 体毛なり。 背を 此方へ 向けるは 攻撃の 合図なれば 注意されたし。",
		'zh-tw': "擁有一身絕不會被點燃的奇異體毛。 當牠背向己方時須特別小心， 這是牠將發動攻擊的信號。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "たいあたり",
			'zh-tw': "撞擊"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			ja: "ほのお",
			'zh-tw': "火焰"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 650970,
				tcgplayer: 569765,
				cardtrader: 234076,
			},
		},
	]
}

export default card