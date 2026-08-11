import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "仙子伊布V"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 200,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "夢境之禮"
		},

		effect: {
			'zh-tw': "在自己的回合時可使用1次，若使用，則自己的回合結束。從自己的牌庫選擇1張物品卡，在給對手看過後加入手牌。並且重洗牌庫。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "魔法射擊"
		},

		damage: 60,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card