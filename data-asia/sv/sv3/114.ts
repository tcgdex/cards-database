import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ヨーギラス",
		'zh-tw': "幼基拉斯"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	dexId: [246],
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "地面 深くで 生まれ 山ほどの 土を 食べ終わると 体を つくるため サナギになる。",
		'zh-tw': "誕生在地底深處。當牠吃完滿山的土壤後， 就會為了成長而變成蛹。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "どつく",
			'zh-tw': "推擊"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "がちんこ",
			'zh-tw': "正面對決"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card