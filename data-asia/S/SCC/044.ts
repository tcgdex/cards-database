import { Card } from "../../../interfaces"
import Set from "../SCC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "美納斯"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		'zh-tw': "據說目睹了美納斯美麗身姿的人，心中一切的憤恨都能得到撫慰。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "水滴守護"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，對手從手牌使出支援者時，這張卡的持有人與其手牌不會受到其效果的影響。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "雙重粉碎"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×70點傷害。"
		},

		damage: "70×",
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card