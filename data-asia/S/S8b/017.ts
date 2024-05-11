import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "噴火龍"
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 170,
	types: ["Fire"],

	description: {
		'zh-tw': "會噴出彷彿連岩石都能燒焦的灼熱火焰。有時會引發森林火災。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "戰鬥意識"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。查看自己的牌庫上方3張卡，選擇其中1張卡加入手牌。將剩餘卡丟棄。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "王者火焰"
		},

		effect: {
			'zh-tw': "增加自己的棄牌區的「丹帝」的張數×50點傷害。"
		},

		damage: "100+",
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card