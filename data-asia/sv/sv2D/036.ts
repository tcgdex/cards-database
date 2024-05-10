import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "ヨーギラス",
		'zh-tw': "幼基拉斯"
	},

	illustrator: "Haru Akasaka",
	rarity: "Common",
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
		cost: ["Colorless"],

		name: {
			ja: "にどづき",
			'zh-tw': "二連撞"
		},

		damage: "10×",

		effect: {
			ja: "コインを2回投げ、オモテの数×10ダメージ。",
			'zh-tw': "擲2次硬幣，造成正面出現的次數×10點傷害。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card