import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ホップのウールー",
		'zh-tw': "赫普的毛辮羊",
		'zh-cn': "赫普的毛辮羊"
	},

	illustrator: "Tomomi Ozaki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [831],
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "毛が 伸びすぎると 動けない。 ウールーの 体毛で 織られた 布は 驚くほど 丈夫。",
		'zh-tw': "要是身上的毛長得太長就會 不能動彈。用毛辮羊的體毛 織成的布結實得讓人吃驚。",
		'zh-cn': "要是身上的毛長得太長就會 不能動彈。用毛辮羊的體毛 織成的布結實得讓人吃驚。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "けとばす",
			'zh-tw': "踢飛",
			'zh-cn': "踢飛"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card