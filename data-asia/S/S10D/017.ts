import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "コアルヒー",
		'zh-tw': "鴨寶寶"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	dexId: [580],
	hp: 60,
	types: ["Water"],

	description: {
		ja: "飛ぶよりも 泳ぐのが 得意で 水中に 潜っては 大好きな 水ゴケを うれしそうに 食べる。",
		'zh-tw': "比起飛行更擅長游泳。 一潛入水中就會開心地 吃起最愛的水苔。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "みずかけ",
			'zh-tw': "潑水"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 650977,
				tcgplayer: 569772,
				cardtrader: 234083,
			},
		},
	]
}

export default card