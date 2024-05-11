import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "酷豹"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "交易"
		},

		effect: {
			'zh-tw': "在自己的回合時，若將自己的1張手牌丟棄，則可使用1次。從自己的牌庫抽出2張卡。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "劈開"
		},

		damage: 60,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card