import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大嘴蝠"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		'zh-tw': "一次能吸３００毫升的血液。有時會因為吸了太多的血，連飛都飛不起來。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "無聲抽出"
		},

		effect: {
			'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，可使用1次。從自己的牌庫抽出2張卡。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "空氣斬"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card