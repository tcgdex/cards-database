import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "<火箭隊的>幼基拉斯",
		'zh-cn': "<火箭隊的>幼基拉斯",
		ja: "ロケット団のヨーギラス"
	},

	illustrator: "Kuroimori",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'zh-tw': "誕生在地底深處。 當牠吃完滿山的土壤後， 就會為了成長而變成蛹。",
		'zh-cn': "誕生在地底深處。 當牠吃完滿山的土壤後， 就會為了成長而變成蛹。",
		ja: "地面 深くで 生まれ 山ほどの 土を 食べ終わると 体を つくるため サナギになる。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "嚼山",
			'zh-cn': "嚼山",
			ja: "やまかじり"
		},

		effect: {
			'zh-tw': "將對手的牌庫上方1張卡丟棄。",
			'zh-cn': "將對手的牌庫上方1張卡丟棄。",
			ja: "相手の山札を上から1枚トラッシュする。"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [246]
}

export default card