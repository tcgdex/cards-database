import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "詛咒娃娃"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'zh-tw': "詛咒的能量滲入被丟棄玩偶的棉花裡變成了寶可夢。如果張開嘴巴，能量就會外洩。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "退化詛咒"
		},

		effect: {
			'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，可使用1次。選擇對手的1隻進化的備戰寶可夢，移除1張「進化卡」使其退化。將移除的卡放回對手的手牌。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "陰森射擊"
		},

		damage: 40,
		cost: ["Psychic", "Colorless"]
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
	regulationMark: "D"
}

export default card
