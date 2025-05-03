import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "モノズ",
		'zh-tw': "單首龍",
		'zh-cn': "單首龍"
	},

	illustrator: "YASHIRO Nanaco",
	rarity: "Common",
	category: "Pokemon",
	dexId: [633],
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "棲み処は 洞窟の 奥深く。 エサも 少ないので 動くものは なんでも 食いつき 食べようとする。",
		'zh-tw': "棲息的洞窟深處缺乏食糧， 因此只要是會動的東西， 牠都會想去咬住吃掉。",
		'zh-cn': "棲息的洞窟深處缺乏食糧， 因此只要是會動的東西， 牠都會想去咬住吃掉。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "ふみならす",
			'zh-tw': "踩落",
			'zh-cn': "踩落"
		},

		effect: {
			ja: "相手の山札を上から1枚トラッシュする。",
			'zh-tw': "將對手的牌庫上方1張卡丟棄。",
			'zh-cn': "將對手的牌庫上方1張卡丟棄。"
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "かみつく",
			'zh-tw': "咬住",
			'zh-cn': "咬住"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card