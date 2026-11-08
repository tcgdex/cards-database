import { Card } from "models/database/card"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ラクライ",
		'zh-tw': "落雷獸",
		'zh-cn': "落雷獸"
	},

	illustrator: "Nakamura Ippan",
	rarity: "None",
	category: "Pokemon",
	dexId: [309],
	hp: 60,
	types: ["Lightning"],

	description: {
		'ja-jp': "静電気を 体毛に 溜める。 空気の 乾燥した 季節には 全身から 火花を 散らす。",
		'zh-tw': "會在體毛中儲存靜電。 在空氣乾燥的季節 會從全身散發出火花。",
		'zh-cn': "會在體毛中儲存靜電。 在空氣乾燥的季節 會從全身散發出火花。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "うしろげり",
			'zh-tw': "後踢",
			'zh-cn': "後踢"
		},

		damage: 10
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			'ja-jp': "プチボルト",
			'zh-tw': "小伏特",
			'zh-cn': "小伏特"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card