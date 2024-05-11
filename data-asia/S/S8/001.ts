import { Card } from "../../../interfaces"
import Set from "../S8"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "綠毛蟲"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		'zh-tw': "別看牠的腳很短，因為是吸盤，所以無論是斜坡還是牆壁都能輕鬆前進。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "群聚"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張「綠毛蟲」卡，放置於備戰區。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "蟲咬"
		},

		damage: 10,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card