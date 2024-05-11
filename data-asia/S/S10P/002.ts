import { Card } from "../../../interfaces"
import Set from "../S10P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 霹靂電球"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		'zh-tw': "形狀頗似精靈球的奇異寶可夢。 當情緒高漲時，積蓄在腹部的 電流就會放出，同時發出大笑。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "精心充能"
		},

		effect: {
			'zh-tw': "這個招式只可在後攻玩家的最初回合使用。選擇最多2隻自己的備戰寶可夢，從牌庫附給那些寶可夢各1張基本能量卡。並且重洗牌庫。"
		}
	}, {
		name: {
			'zh-tw': "衝撞"
		},

		damage: 10,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card