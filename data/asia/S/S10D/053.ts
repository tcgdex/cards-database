import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "聒噪鳥"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'zh-tw': "能將人類話語模仿得維妙維肖的表演家。 當隨著年齡增長而累積眾多經驗後， 甚至還能夠理解話語中的含意。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "呼喚"
		},

		effect: {
			'zh-tw': "從自己的牌庫抽出1張卡。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "口若懸河"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		},

		damage: 30,
		cost: ["Colorless"]
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
	regulationMark: "F"
}

export default card