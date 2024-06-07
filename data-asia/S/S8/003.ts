import { Card } from "../../../interfaces"
import Set from "../S8"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "巴大蝶"
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'zh-tw': "每天都忙著採集花蜜。習慣在腿部的細毛上塗滿花蜜，然後帶回巢穴裡。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "三色鱗粉"
		},

		effect: {
			'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，可使用1次。將對手的戰鬥寶可夢【中毒】、【灼傷】與【混亂】。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "起風"
		},

		damage: 90,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card