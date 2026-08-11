import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "口呆花"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'zh-tw': "會先吐出有毒的粉末，讓對手停止行動後，再用溶解液解決對手。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "危險黏液"
		},

		effect: {
			'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，可使用1次。將對手的戰鬥寶可夢【中毒】與【灼傷】。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "藤鞭"
		},

		damage: 40,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card